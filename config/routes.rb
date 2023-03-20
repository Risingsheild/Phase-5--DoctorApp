Rails.application.routes.draw do

  resources :prescriptions, only: [:index, :create]
  resources :patients, only: [:index, :show, :create]
  resources :appointments
  

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
