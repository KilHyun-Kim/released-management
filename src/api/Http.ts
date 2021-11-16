import axios from "axios";

export const request = (method: any, url: any, data?: any, headers?: any) => {
    return axios({
        method,
        url: url,
        data,
        headers
    }).then(result => result.data)
      .catch(result => {
          const {status} = result.response
          throw result.response
      })
}



