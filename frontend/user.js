const params = new URLSearchParams(window.location.search)
const id = params.get('id')
console.log(params)
fetch(`http://localhost:3000/users/${id}`)
.then(handleResponse)
.then(user => {
        const h2 = document.createElement('h2')

        h2.innerText = `${user.name}'s Playlist`
        const header = document.querySelector("header")
        
        header.appendChild(h2)
    })



function handleResponse(response){
return response.json()
}

