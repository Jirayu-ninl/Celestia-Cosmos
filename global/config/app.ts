export const app = {
  NAME: 'TheIceJi Cosmos',
  VERSION: '2024.11.2101',
  UPDATE_DATE: 'Nov 21, 2024',
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
