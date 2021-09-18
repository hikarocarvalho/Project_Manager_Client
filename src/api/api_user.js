
export const UserApi = {
    url: 'http://localhost:3001/users',
    fetchGetLogin: (values) => (fetch(UserApi.url +"/verify/"+ values)),
    fetchGet: () =>  (fetch(UserApi.url)),
    fetchGetById: (id) => (fetch(UserApi.url + '/' + id)),
    fetchPost: (body) => {
      return fetch(UserApi.url + '/add', {
        method: 'POST',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchPut: (body, id) => {
      return fetch(UserApi.url + '/update/' + id, {
        method: 'PUT',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchDelete: (id) => {
      return fetch(UserApi.url + '/delete/' + id, {
        method: 'DELETE'
      })
    }
  }