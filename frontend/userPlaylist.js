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
        createButtonClick()
    })

function handleResponse(response){
return response.json()
}

function createPlaylistCards (playlist) { 
  const playlistContainer = document.querySelector("#playlistContainer")
    playlist.map(playlist => {
      const div = document.createElement('div')
      const h3 = document.createElement('h3')

      h3.innerText = playlist.name
      div.className = 'playlistCard'

      playlistContainer.appendChild(div)
      div.appendChild(h3)
      updateButton(div, playlist)
    })

}

function createButtonClick() {
  
  const button = document.querySelector("#createButton")
  button.addEventListener("click", function (event) {
    document.querySelector('#createButton').remove()
    
    const form = document.createElement("form")
    form.method = "POST"
    form.action = "http://localhost:3000/playlists"
    form.id = "createPlaylistForm"
    
    const label = document.createElement('label')
    label.innerText = "Playlist Name"
    
    const inputName = document.createElement('input')
    inputName.name = "name"
    inputName.className = 'textInput'
    
    const inputId = document.createElement('input')
    inputId.type = "hidden"
    inputId.name = "user_id"
    inputId.value = id
    
    const submitButton = document.createElement('input')
    submitButton.type = "submit"
    submitButton.className = 'submitButton'
  
    console.log(id)
    

    header.append(form)
    form.append(label, inputName, inputId, submitButton)
  })

}

function updateButton(div, playlist){
    const button = document.createElement('button')

    button.innerText = 'Rename Playlist'
    button.className = 'updateButton'
    
    div.appendChild(button)
    updateButtonClick(button, div, playlist)
}

function updateButtonClick(button, div, playlist) {
  
  button.addEventListener("click", function (event) {
    const h3 = div.querySelector('h3')
    h3.remove()
    button.remove()
    const form = document.createElement("form")

    form.id = "updatePlaylistForm"
    
    const inputName = document.createElement('input')
    inputName.name = "name"
    inputName.type = 'text'
    inputName.className = 'textInput'
    inputName.value = playlist.name

    const changeButton = document.createElement('input')
    changeButton.type = "submit"
    changeButton.value = 'Submit Changes'
    changeButton.className = 'submitButton'

    div.append(form)
    form.append(inputName, changeButton)

    changeButton.addEventListener('click', function(event){
        event.preventDefault() 
          fetch((`http://localhost:3000/playlists/${playlist.id}`), {
            method: "PATCH",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  playlist: {
                      name: inputName.value
                      // user_id: id
                  }
              })
          }).then(r => window.location =`userPlaylist.html?id=${id}`)
       })
    })
}

