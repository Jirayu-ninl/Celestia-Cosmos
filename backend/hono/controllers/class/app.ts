// export const runtime = 'edge'
import { createRouter } from './routes'

const app = createRouter()
export { app as server }
