Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root "static_pages#root"
namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:show, :index] do
      resources :reviews, only: [:index, :create, :destroy, :update, :show]
    end
    resources :carts, only: [:show, :create] do 
      resources :cart_items, only: [:create, :index, :destroy, :update]
    end
  end
end
