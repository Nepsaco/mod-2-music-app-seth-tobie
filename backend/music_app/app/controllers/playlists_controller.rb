class PlaylistsController < ApplicationController

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

    # private
    #     def allowed_params
    #         params.permit(:name)
    #     end

end
