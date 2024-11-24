// @ts-check
await import('./global/env.mjs')
/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
import 'dotenv/config'
import { fileURLToPath } from 'url'
// import path, { dirname } from 'path'
import { createRequire } from 'node:module'
import withPWAInit from '@ducanh2912/next-pwa'
import plugins from 'next-compose-plugins'
import { withSentryConfig } from '@sentry/nextjs'
import bundleAnalyzer from '@next/bundle-analyzer'
import MillionLint from '@million/lint'
import MillionCompiler from 'million/compiler'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = withPWAInit({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  dest: 'public',
  fallbacks: {
    document: '/offline',
  },
  register: true,
})

const __filename = fileURLToPath(import.meta.url)
const require = createRequire(import.meta.url)

const appExportList = ['standalone', 'export']
const appExport = process.env.EXPORT !== undefined &&
  appExportList.includes(process.env.EXPORT.toLowerCase()) && {
    output: process.env.EXPORT.toLowerCase(),
  }

const nextConfig = {
  webpack: (config, { webpack, isServer }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    )

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.mp4$/,
      use: ['file-loader'],
    })

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|ps)$/,
      exclude: /node_modules/,
      use: ['glslify-import-loader', 'raw-loader', 'glslify-loader'],
    })
    // config.module.rules.push({
    //   test: /\.hlsl$/i,
    //   exclude: /node_modules/,
    //   use: ['@gdgt/hlsl-loader'],
    // })

    return config
  },
  async headers() {
    const headers = [
      {
        // Public API routes - allow access from anywhere
        source: '/api/public/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // Allow all origins for public API
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
      {
        // Private API routes - restrict to your domain and subdomains
        source: '/api/((?!public/).+)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          {
            key: 'Access-Control-Allow-Origin',
            value:
              'https://theiceji.com, https://app.theiceji.com, https://admin.theiceji.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]

    headers.push({
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        {
          key: 'Feature-Policy',
          value:
            "camera 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'; " +
            "accelerometer 'self'; geolocation 'self'; gyroscope 'self'",
        },
        {
          key: 'Permissions-Policy',
          value:
            'camera=(), magnetometer=(), microphone=(), payment=(), usb=(), ' +
            'accelerometer=(self), geolocation=(self), gyroscope=(self)',
        },
        {
          key: 'Content-Security-Policy',
          value: [
            // Allow everything from anywhere
            "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:",
            // Specific rules for different content types
            "script-src * 'unsafe-inline' 'unsafe-eval'",
            "style-src * 'unsafe-inline'",
            'img-src * data: blob:',
            'font-src * data:',
            'connect-src *',
            'media-src *',
            'frame-src *',
            // Still restrict form submissions to your domain for security
            "form-action 'self'",
          ].join('; '),
        },
      ],
    })

    return headers
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  experimental: {
    instrumentationHook: true,
  },
  ...appExport,
}

const sentryWebpackPluginOptions = {
  org: 'theiceji',
  project: 'celestia-cosmos',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
}

const millionConfig = {
  compiler: { auto: { rsc: true } },
  lint: { rsc: true },
}

export default plugins(
  [
    [withSentryConfig, sentryWebpackPluginOptions],
    // process.env.NODE_ENV === 'development' &&
    //   MillionLint.next(millionConfig.lint),
    [MillionCompiler.next, millionConfig.compiler],
    withPWA,
    withBundleAnalyzer,
  ].filter(Boolean),
  nextConfig,
)
