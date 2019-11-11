console.log('hello')
fetch('http://127.0.0.1:3000/users')
    .then(handleResponse)
    .then(users => {
        users.map(user => {
            const h1 = document.createElement('h1')

            h1.innerText = user.name

            document.body.appendChild(h1)
        })
    })



function handleResponse(response){
    return response.json()
}
