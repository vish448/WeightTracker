
const readAll = () => {
    return fetch('/.netlify/functions/readWeight').then((response) => {
      return response.json()
    })
  }
  
  export default {
    readAll: readAll
  }