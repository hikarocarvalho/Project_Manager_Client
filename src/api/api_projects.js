
export const ProjectApi = {
    url: 'http://localhost:3001/projects',
    fetchByUser: (userid) => (fetch(ProjectApi.url+'/byuser/'+userid)),
    fetchGet: () =>  (fetch(ProjectApi.url)),
    fetchGetById: (id) => (fetch(ProjectApi.url + '/' + id)),
    fetchPost: (body) => {
      return fetch(ProjectApi.url + '/add', {
        method: 'POST',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchPut: (body, id) => {
      return fetch(ProjectApi.url + '/update/' + id, {
        method: 'PUT',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchDelete: (id) => {
      return fetch(ProjectApi.url + '/delete/' + id, {
        method: 'DELETE'
      })
    }
  }