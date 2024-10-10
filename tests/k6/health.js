import http from 'k6/http'
import { check } from 'k6'
import { SERVICE_URLS, TEST_USER } from './constants'

export const options = {
  vus: 1, // VUs to run concurrently.
  iterations: 1, // 1 iteration per service
  thresholds: {
    http_req_failed: ['rate<0.01'], // Ensure failure rate is less than 1%
  },
}

export default function () {
  Object.entries(SERVICE_URLS).forEach((service_name, service_url) => {
    const res = http.get(service_url)
    check(res, {
      [`${service_name} is healthy`]: (r) => r.status === 200,
    })
  })
}
