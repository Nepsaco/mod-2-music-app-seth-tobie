class TokensController < ApplicationController

    def create
        token = RestClient.post('https://accounts.spotify.com/api/token',
            {'grant_type': 'client_credentials' },
            {'Authorization': "Basic #{MusicApp::Application.credentials.encoded_key}"})
            
        @access_token = Token.create(access_token: JSON.parse(token)['access_token'])
            render json: @access_token
    end

end
