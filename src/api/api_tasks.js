
export const TasksApi = {
    url: 'http://localhost:3001/tasks',
    fetchGet: (id) =>  (fetch(TasksApi.url+'/projectid/'+id)),
    fetchGetById: (id) => (fetch(TasksApi.url + '/' + id)),
    fetchPost: (body) => {
      return fetch(TasksApi.url + '/add', {
        method: 'POST',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchPut: (body, id) => {
      return fetch(TasksApi.url + '/update/' + id, {
        method: 'PUT',
        headers: new Headers({
          "Content-type": "application/json"
        }),
        body: JSON.stringify(body)
      })
    },
    fetchDelete: (id) => {
      return fetch(TasksApi.url + '/delete/' + id, {
        method: 'DELETE'
      })
    }
  }