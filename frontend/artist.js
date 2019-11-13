const params = new URLSearchParams(window.location.search)
const id = params.get('id')

fetch(`http://127.0.0.1:3000/artists/${id}`)
    .then(handleResponse)
    .then(artist => {
        const artistContainer = document.querySelector("#artistCardContainer")
        const h2 = document.createElement('h2')
        h2.innerText = artist.name
        console.log(artist)
        artistContainer.appendChild(h2)

    })
    

    



function handleResponse(response){
    return response.json()
}



