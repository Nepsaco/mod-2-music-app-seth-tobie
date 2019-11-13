class PlaylistsController < ApplicationController

    before_action :find_playlist, only: [:update, :destroy]

    def index
        playlists = Playlist.all 

        render json: playlists
    end

    def create
      newPlaylist = Playlist.create({
        name: params[:name],
        user_id: params[:user_id]
      })
        redirect_to "http://localhost:3001/userPlaylist.html?id=#{newPlaylist.user_id}"
    end

    def update
      @playlist.update(allowed_params)
    end

    def destroy
      @playlist.delete
    end

    private

    def find_playlist
      @playlist = Playlist.find(params[:id])
    end

    def allowed_params
      params.require(:playlist).permit(:name, :user_id)
    end

end
