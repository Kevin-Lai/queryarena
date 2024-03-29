Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :questions, only: [:index, :show, :create, :update, :destroy]
    resources :answers, only: [:create, :update, :destroy]
    resources :upvotes, only: [:create, :destroy]

    resources :search, only: [:index]
  end

end
