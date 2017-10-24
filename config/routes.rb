Rails.application.routes.draw do
  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/update'

  get 'businesses/new'

  get 'businesses/create'

  get 'businesses/update'

  get 'businesses/edit'

  get 'businesses/destroy'

  get 'businesses/show'

  get 'businesses/index'

  get 'reviews/new'

  get 'reviews/create'

  get 'reviews/update'

  get 'reviews/index'

  get 'reviews/show'

  get 'reviews/destroy'

  get 'reviews/edit'

  get 'users/new'

  get 'users/create'

  get 'users/update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
