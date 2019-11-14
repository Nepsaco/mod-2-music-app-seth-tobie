const params = new URLSearchParams(window.location.search)
const id = params.get('id')
let token = "" 

fetchToken()
console.log(token)

fetch(`https://api.spotify.com/v1/artists/${id}/top-track`, {
        headers: {
        'Authorization': 'Bearer' + ' ' + token,
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
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



function fetchToken(){
        fetch ('http://localhost:3000/tokens/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/JSON'
            }
        })
        .then(handleResponse)
        .then(console.log)
        .then(access_token =>{
                token = access_token["access_token"]
            })
    console.log(token)
}


