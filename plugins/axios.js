let API_KEY = '41b9a1b1-a80a-463f-b214-f93adeb6da76'
let base_url = 'https://api.thecatapi.com/v1'


export default function ({ $axios, store, redirect }) {

  // Request intercepts
  $axios.interceptors.request.use(
    // This function will be called each time a request is made                                                                           
    function (config) {

      // Set base url to our Cat API url
      config.baseURL = base_url;

      // setting some custom headers for global axios request
      config.headers.common['Access-Control-Allow-Origin'] = '*'
      config.headers.common['Access-Control-Allow-Credentials'] = 'true'
      config.headers.common['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'
      config.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'

      // Set the API_Key for every outgoing request
      if (API_KEY) {
        config.headers.common['x-api-key'] = API_KEY;
      }
      return config;
    },
    // This function will be called each time a request fails
    function (error) {
      // a better way to handle request errors
      return Promise.reject(error);
    }
  )
}
