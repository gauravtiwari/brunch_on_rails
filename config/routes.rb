Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#index'
  get 'pages/show', to: 'pages#show', as: :page_show
  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
