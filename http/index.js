const baseUrl = "https://trip-dev-api.herokuapp.com/v1/users"


// // Generate a unique token for storing your bookshelf data on the backend server.
// let token = localStorage.token
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
//   'Authorization': token
}

export const signin = async (body) => {
    let response = await fetch(`${baseUrl}/signin`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers
    })
    .then(res => res.json())
    return response
}

export const signup = async (body) => {
    let response = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers
    })
    .then(res => res.json())
    return response
}
