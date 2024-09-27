export const app = {
  NAME: 'TheIceJi Cosmos',
  VERSION: '2024.9.2301',
  UPDATE_DATE: 'Sep 23, 2024',
  SENTRY: {
    dsn: process.env.NEXT_PUBLIC_APP_COSMOS_SENTRY_DSN,
  },
  Dependencies: {
    Celestia: '0.9',
    React: '18.3.1',
    NextJs: '14.2.13',
    ThreeJs: 'r168',
  },
  Functions: {
    useThree: true,
    useAudio: true,
    useAuth: true,
    useWeb3: true,
  },
  user: {
    rateSwap: 59.2,
  },
  s3: {
    bucketName: process.env.NEXT_PUBLIC_S3_UPLOAD_ENDPOINT ?? 'celestia',
    endpoint: process.env.NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT,
  },
}
