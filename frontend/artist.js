const params = new URLSearchParams(window.location.search)
const id = params.get('id')
let token = "" 

fetchToken()
    .then(fetchTopTracks)

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
        
            const addToPlaylistButton = document.createElement("button")
            const div = document.createElement("div")

            h3.innerText = track.name
            addToPlaylistButton.innerText = "Add to Playlist?"
            div.className = "songCard"
            
            
            artistContainer.append(div)
            div.append(h3, addToPlaylistButton)
            clickAddToPlaylistButton(addToPlaylistButton, track)
            return track
    } 

     ))
    //  .then(track => {
    //      fetch("http://localhost:3000/songs/", {
    //      method:'POST',
    //      headers: {
    //          'Content-Type': 'application/JSON'
        
    //      }
    //  })})

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

function clickAddToPlaylistButton(button, track){
    button.addEventListener("click", (event) => {
        fetch("http://localhost:3000/songs", {
         method:'POST',
         headers: {
             'Content-Type': 'application/JSON'
            
         },
         body: JSON.stringify({
             name: track.name,
             song_id: track.id
         })
        }
    ).then (fetch ("http://localhost:3000/playlists", {
        method:'POST',
        headers: {
            'Content-Type': 'application/JSON'
         },
        body: JSON.stringify({
            name: track.name,
            song_id: track.id
            })
        }
        )
     )
    })
}

function pickPlaylist() {
    const select = document.querySelector("#dropDown")
    fetch("http://localhost:3000/playlists")
        .then(handleResponse)
        .then(playlists => {
            console.log(playlists)
            playlists.map(playlist => {
                const option = document.createElement('option')
                option.value = playlist.id
                option.innerText = playlist.name
  
                select.append(option)
            })
        })
}
pickPlaylist()