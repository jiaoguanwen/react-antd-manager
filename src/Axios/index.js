import Jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

axios.defaults.retry = 4
axios.defaults.retryDelay = 1000
axios.interceptors.response.use(undefined, err => {
  console.log(JSON.stringify(err))
  if (err.response) {
    console.log(err.response.status)
    return Promise.reject(err)
  } else {
    if (err.code === 'ECONNABORTED') {
      var config = err.config
      // If config does not exist or the retry option is not set, reject
      if (!config || !config.retry) return Promise.reject(err)
      // Set the variable for keeping track of the retry count
      config.__retryCount = config.__retryCount || 0
      // Check if we've maxed out the total number of retries
      if (config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err)
      }
      // Increase the retry count
      config.__retryCount += 1
      // Create new promise to handle exponential backoff
      var backoff = new Promise(function(resolve) {
        setTimeout(function() {
          resolve()
        }, config.retryDelay || 1)
      })
      // Return the promise in which recalls axios to retry the request
      return backoff.then(function() {
        return axios(config)
      })
    }
  }
})

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(
        options.url,
        {
          param: 'callback'
        },
        function(err, res) {
          if (res.status === 'success') {
            resolve(res)
          } else {
            reject(res.message)
          }
        }
      )
    })
  }

  static ajax(options) {
    let loading
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById('ajaxLoading')
      loading.style.display = 'block'
    }
    // let baseApi = 'https://easy-mock.com/mock/5bce76caeaf09a28dd3eb6af/api'
    let baseApi = 'http://0.0.0.0:7300/mock/5bceda82a1c7a7507b5eb376/api'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then(response => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById('ajaxLoading')
          loading.style.display = 'none'
        }
        console.log(response)
        if (response.status === 200) {
          let res = response.data
          if (res.code === 0) {
            resolve(res)
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(response.data)
        }
      })
    })
  }
}

// const notFoundError = {
//   config: {
//     transformRequest: {},
//     transformResponse: {},
//     timeout: 5000,
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     headers: { Accept: 'application/json, text/plain, */*' },
//     retry: 4,
//     retryDelay: 1000,
//     method: 'get',
//     url:
//       'https://easy-mock.com/mock/5bce76caeaf09a28dd3eb6af/api/table/high/list',
//     baseURL: 'https://easy-mock.com/mock/5bce76caeaf09a28dd3eb6af/api',
//     params: { page: 1 }
//   },
//   request: {},
//   response: {
//     data: { error: 'Not Found' },
//     status: 404,
//     statusText: 'Not Found',
//     headers: { 'content-type': 'application/json; charset=utf-8' },
//     config: {
//       transformRequest: {},
//       transformResponse: {},
//       timeout: 5000,
//       xsrfCookieName: 'XSRF-TOKEN',
//       xsrfHeaderName: 'X-XSRF-TOKEN',
//       maxContentLength: -1,
//       headers: { Accept: 'application/json, text/plain, */*' },
//       retry: 4,
//       retryDelay: 1000,
//       method: 'get',
//       url:
//         'https://easy-mock.com/mock/5bce76caeaf09a28dd3eb6af/api/table/high/list',
//       baseURL: 'https://easy-mock.com/mock/5bce76caeaf09a28dd3eb6af/api',
//       params: { page: 1 }
//     },
//     request: {}
//   }
// }

// const timeoutError = {
//   config: {
//     transformRequest: {},
//     transformResponse: {},
//     timeout: 1,
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     headers: { Accept: 'application/json, text/plain, */*' },
//     retry: 4,
//     retryDelay: 1000,
//     method: 'get',
//     url: 'https://easy-mock.com/mock/5bce76caeaf09a28dd3eb6af/api/table/list',
//     baseURL: 'https://easy-mock.com/mock/5bce76caeaf09a28dd3eb6af/api',
//     params: { page: 1 }
//   },
//   code: 'ECONNABORTED',
//   request: {}
// }
