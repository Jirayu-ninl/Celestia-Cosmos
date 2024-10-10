import http from 'k6/http'
import { check } from 'k6'
import { SERVICE_URLS } from './constants'

export const options = {
  vus: 1, // VUs to run concurrently.
  iterations: 1, // 1 iteration per service
  thresholds: {
    http_req_failed: ['rate<0.01'], // Ensure failure rate is less than 1%
  },
}

export default function () {
  const metrics = {}
  Object.entries(SERVICE_URLS).forEach((service_name, service_url) => {
    const res = http.get(service_url + '/health')
    const isHealthy = check(res, {
      [`${service_name} is healthy`]: (r) => r.status === 200,
    })
    metrics[service_name] = { isHealthy }
  })

  const payload = JSON.stringify({
    projectId: 'celestia',
    key: 'health_check',
    metrics: metrics,
  })

  const headers = { 'Content-Type': 'application/json' }
  const res = http.post(process.env.METRICS_URL, payload, {
    headers,
  })
  console.log(`Metrics POST response status: ${res.status}`)
  console.log(`Metrics POST response body: ${res.body}`)
}
