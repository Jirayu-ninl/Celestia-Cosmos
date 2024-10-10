import http from 'k6/http'
import { check, sleep, group } from 'k6'
import { Rate, Counter, Trend } from 'k6/metrics'

// Metrics
const errorRate = new Rate('errors')
const requestCount = new Counter('request_count')
const latencyTrend = new Trend('latency')

export const options = {
  cloud: {
    projectID: 'celestia',
    name: 'services test',
  },
  vus: 10, // VUs to run concurrently.
  duration: '30s', // total duration of the test run.
  stages: [
    { duration: '1m', target: 50 }, // Ramp-up to 50 virtual users over 1 minute
    { duration: '3m', target: 50 }, // Stay at 50 users for 3 minutes
    { duration: '1m', target: 100 }, // Ramp-up to 100 users over 1 minute
    { duration: '5m', target: 100 }, // Stay at 100 users for 5 minutes
    { duration: '1m', target: 0 }, // Ramp-down to 0 users over 1 minute
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    errors: ['rate<0.01'], // Error rate should be below 1%
    'http_req_duration{type:POST}': ['avg<300'], // Average POST request duration should be below 300ms
  },
}

const TEST_USER = { email: 'test@theiceji.com', password: 'test_pass' }

const SERVICE_URLS = {
  COSMOS: 'https://theiceji.com',
  NEXUS: 'https://nexus.theiceji.com',
  STELLA: 'https://stella.theiceji.com',
  ASTRA: 'https://astra.theiceji.com',
  INTERLINK: 'https://interlink.theiceji.com',
  STARGATE: 'https://stargate.theiceji.com',
}

export default async function () {
  group('App Test', function () {
    let res = http.get(`${SERVICE_URLS.COSMOS}/health`)
    requestCount.add(1)
    check(res, {
      'COSMOS: health check passed': (r) => r.status === 200,
      'COSMOS: response time < 500ms': (r) => r.timings.duration < 500,
    }) || errorRate.add(1)
    latencyTrend.add(res.timings.duration)

    res = http.get(`${SERVICE_URLS.NEXUS}/health`)
    requestCount.add(1)
    check(res, {
      'NEXUS: health check passed': (r) => r.status === 200,
      'NEXUS: response time < 500ms': (r) => r.timings.duration < 500,
    }) || errorRate.add(1)
    latencyTrend.add(res.timings.duration)
  })

  group('Services Test', function () {
    let res = http.get(`${SERVICE_URLS.STELLA}/health`)
    requestCount.add(1)
    check(res, {
      'STELLA: health check passed': (r) => r.status === 200,
      'STELLA: response time < 500ms': (r) => r.timings.duration < 500,
    }) || errorRate.add(1)
    latencyTrend.add(res.timings.duration)

    // 2. POST Request - Login simulation
    res = http.post(
      `${SERVICE_URLS.STARGATE}/debug/login`,
      JSON.stringify(TEST_USER),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    requestCount.add(1)
    check(res, {
      'STARGATE: authentication passed': (r) =>
        r.status === 200 && r.json().token !== undefined,
    }) || errorRate.add(1)

    const authHeaders = {
      headers: {
        Authorization: `Bearer ${res.json().token}`,
      },
    }
    res = http.get(`${SERVICE_URLS.INTERLINK}/debug/auth`, authHeaders)
    requestCount.add(1)
    check(res, {
      'INTERLINK: authentication passed': (r) => r.status === 200,
      'INTERLINK: data recieved': (r) => r.json().email === TEST_USER.email,
    }) || errorRate.add(1)

    // 4. PUT Request - Update user data
    const analytics_data = {
      projectId: 'celestia',
      app: 'test',
      metrics: { time: Date.now() },
    }
    res = http.put(
      `${SERVICE_URLS.ASTRA}/debug/metrics`,
      JSON.stringify(analytics_data),
      {
        headers: { 'Content-Type': 'application/json', ...authHeaders.headers },
      },
    )
    requestCount.add(1)
    check(res, {
      'ASTRA: add metrics passed': (r) => r.status === 200,
    }) || errorRate.add(1)
  })

  sleep(1)
}
