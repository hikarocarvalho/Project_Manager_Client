
export const PriorityApi = {
    url: 'http://localhost:3001/priority',
    fetchGet: () =>  fetch(PriorityApi.url),
    fetchGetById: (id) => fetch(PriorityApi.url + '/' + id),
    fetchPost: (body) => {
      return fetch(PriorityApi.url + '/add', {
        method: 'POST',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchPut: (body, id) => {
      return fetch(PriorityApi.url + '/update/' + id, {
        method: 'PUT',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchDelete: (id) => {
      return fetch(PriorityApi.url + '/delete/' + id, {
        method: 'DELETE'
      })
    }
  }