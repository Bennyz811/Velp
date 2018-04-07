Rails.application.routes.draw do

  get 'categories/new'

  get 'categories/create'

  get 'categories/update'

  get 'categories/destroy'

  get 'categories/edit'

namespace :api, defaults: {format: :json} do

  resources :users
  resource :session, only: [:create, :destroy]
  resources :reviews
  resources :businesses do
    get "search", on: :collection
    get "recommend", on: :collection
  end
end

root to: 'static_pages#root'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
