const params = new URLSearchParams(window.location.search)
const id = params.get('id')
console.log(params)
fetch(`http://localhost:3000/users/${id}`)
.then(handleResponse)
.then(user => {
        const h1 = document.createElement('h1')

        h1.innerText = user.name

        document.body.appendChild(h1)
    })



function handleResponse(response){
return response.json()
}
