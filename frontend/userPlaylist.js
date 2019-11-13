const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const header = document.querySelector("header")

fetch(`http://localhost:3000/users/${id}`)
.then(handleResponse)
.then(user => {
        const h2 = document.createElement('h2')
        const createButton = document.createElement('button')
    
        h2.innerText = `${user.name}'s Playlist`
        createButton.innerText = "Create Playlist?"
        createButton.id = "createButton"
 
        header.append(h2, createButton)
        createPlaylistCards(user.playlists)
        buttonClick()
    })

function handleResponse(response){
return response.json()
}

function createPlaylistCards (playlist) { 
  const playlistContainer = document.querySelector("#playlistContainer")
    playlist.map(playlist => {
      const h3 = document.createElement('h3')
      console.log(playlist)
      h3.innerText = playlist.name
      playlistContainer.appendChild(h3)
    })

}

function buttonClick() {
  
  const button = document.querySelector("#createButton")
  button.addEventListener("click", function (event) {
    
    const form = document.createElement("form")
    form.method = "POST"
    form.action = "http://localhost:3000/playlists"
    form.id = "createPlaylistForm"
    
    const label = document.createElement('label')
    label.innerText = "Playlist Name"
    
    const inputName = document.createElement('input')
    inputName.name = "name"
    
    const inputId = document.createElement('input')
    inputId.type = "hidden"
    inputId.name = "user_id"
    inputId.value = id
    
    const submitButton = document.createElement('input')
    submitButton.type = "submit"
  
    console.log(id)
    

    header.append(form)
    form.append(label, inputName, inputId, submitButton)
  })

}

