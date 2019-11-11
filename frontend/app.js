
fetch('http://127.0.0.1:3000/users')
    .then(handleResponse)
    .then(users => {
        users.map(user => {
            console.log(user.id)
            const h1 = document.createElement('h1')
            h1.innerHTML = `<a href=user.html?id=${user.id}>${user.name}</a>`
            // h1.innerText = user.name

            document.body.appendChild(h1)
        })
    })



function handleResponse(response){
    return response.json()
}



