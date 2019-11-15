const params = new URLSearchParams(window.location.search)
const id = params.get('id')
let token = "" 

fetchToken().then(fetchTopTracks)

function fetchTopTracks(token){
   
    fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`, {
        headers: {
        'Authorization': 'Bearer' + ' ' + token,
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => response.json())
        .then(object => object.tracks.map(track => {
        const artistContainer = document.querySelector("#artistCardContainer")
        const h3 = document.createElement('h3')

        h3.innerText = track.name
        artistContainer.appendChild(h3)
        return track
    } 

     )).then(track => {
         fetch("http://localhost:3000/songs/", {
         method:'POST',
         headers: {
             'Content-Type': 'application/JSON'
        
         }
     })})

    }


function handleResponse(response){
    return response.json()
}

function fetchToken(){
    return fetch ('http://localhost:3000/tokens/', {
        method:'POST',
        headers: {
            'Content-Type': 'application/JSON'
        }
    }).then(handleResponse)
        .then(access_token =>{
            token = access_token["access_token"]
           return token
        })
}



