Playlistify - a spotify based playlist builder
Description and Demonstration can be found [here](https://youtu.be/8k0MVvZcsKI)

----------------------------------------------------------------------------

Getting Started
- First fork and clone project to your local environment.
- Install Gems by running bundle install
- Run a rails migration by using the terminal to go to the backend/music_app folder and use the command rails db:migrate and rails db:seed
- Run both frontend and backend server 
  - Go to the backend/music_app folder and run command rails s
  - In a separate terminal window, go to the frontend folder and use command lite-server

Prerequisites
- You will need to have lite-server or some way to run a frontend server.

- Also you will need to get access to a spotify access token. 
  In our project we hid the credential for our client id and client secret and hid our correlating masterkey file.  So in order to make this project work you will need to first go to Spotify developer site and sign up to recieve a client id. Here is a [link](https://developer.spotify.com/documentation/web-api/quick-start/) to getting started with spotify. We followed the Client Credential flow to access information with out integrating Spotify's authentication linked [here](  https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorizaton-code-flow).
  
  - Once you receive client id you will need to encode your credential directions we followed from this [blog](https://www.viget.com/articles/storing-secret-credentials-in-rails-5-2-and-up/)
  
  -Also you will need to use 64base encrytption and name it encode_key in your credentials.yml file because we call it in our token function.
  

Functionality

- The apps main page allows you to search for an artist in the Spotify database
- Once you click on an artist you will see their top tracks
- You can also click on a user to see, update, delete, and create playlists

Future Functionality

- Linking to each page
- Creating new user
- Updating current user
- Add songs to playlist to display on playlist page
- Album images
- Design updates
- Spotify Player integration
- Token authentication timer rather than refreshing token on page load
- More detail for Artist including description and stats from Spotify

Known Issues

- Backend controllers are littered with uneccessary methods and needs to be refactored
- Model relationships are confued and drastically changed as the scope of the project grew
- Many console errors from Spotify player not integrating

Retrospective

The project was to build a full web app with full CRUD ability. While we were very ambitious with our 4 day timeline, we were able to at least have full functionality on the playlist model. Our biggest challenge was implementing the Spotify API and while the documentation for the API is comprehensive, the amount of information was overwhelming. We were able to practice working in thin vertical slices which also was a learning curve that slowed us. Overall, we were happy with the end result and look forward to finishing out the project.


Built With
- Ruby on Rails
- Javascript
- Spotify API


Authors
Seth Maisel
Tobie Tsuzuki
