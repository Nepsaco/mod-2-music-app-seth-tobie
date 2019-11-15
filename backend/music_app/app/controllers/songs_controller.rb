require 'rest-client'
class SongsController < ApplicationController
  before_action :find_artist, only: [:get_top_tracks] 

  def index
    songs = Song.all
    render json: songs
  end
  
  def get_token
    token = RestClient.post('https://accounts.spotify.com/api/token',
                            {'grant_type': 'client_credentials' },
                            {'Authorization': "Basic #{MusicApp::Application.credentials.encoded_key}"})
    JSON.parse(token)['access_token']
  end
  
  def get_top_tracks(artist_id)
    rest_client = RestClient.get("https://api.spotify.com/v1/artists/#{artist_id}/top-tracks",
                                'Authorization' => "Bearer #{get_token}")
    response = JSON.parse(rest_client)
  end

  def get_spotify_id(name)
    
    rest_client = RestClient.get("https://api.spotify.com/v1/search?q=#{name}&type=artist",
      'Authorization' => "Bearer #{get_token}")
      response = JSON.parse(rest_client)

      artist_id = response["artists"]["items"].map do |item|
          item["id"]
      end.first
      artist_id
  end

  def create
    song = Song.create({
      name: params[:name],
      song_id: params[:song_id]
    })
  end

  private
  
  def find_artist
    Artist.find(params[:id])
  end
end
