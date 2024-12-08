export const app = {
  NAME: 'TheIceJi Celestia',
  VERSION: '2024.11.2502',
  UPDATE_DATE: 'Nov 25, 2024',
  SENTRY: {
    dsn: process.env.NEXT_PUBLIC_APP_COSMOS_SENTRY_DSN,
  },
  Dependencies: {
    Celestia: '1.0b',
    React: '18.3.1',
    NextJs: '14.2.18',
    ThreeJs: 'r170',
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
}
