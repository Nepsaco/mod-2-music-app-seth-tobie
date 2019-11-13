Rails.application.routes.draw do
  resources :playlists
  resources :artists
  resources :users
  # get '/auth/spotify/callback', to: 'users#spotify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
