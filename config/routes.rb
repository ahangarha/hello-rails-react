Rails.application.routes.draw do
  get 'messages', to: 'messages#index'

  root 'static#home'
  get '*path', to: 'static#home'
end
