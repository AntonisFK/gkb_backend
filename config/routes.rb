Rails.application.routes.draw do

  devise_for :users#, :controllers => {sessions: 'sessions'} 
  
  root to: 'application#angular'

  # routes for section 
  get 'sections/:section' => 'sections#show'

  # routes for contents
  get 'contents/index'
  get 'contents/show/:id' => 'contents#show'
  # get 'contents/edit/:id' => 'contents#edit'   # used for testing 
  # get 'contents/new' => 'contents#new'          # used for testing
  post 'contents/create' => 'contents#create'
  patch 'contents/update/:id' => 'contents#update'
  delete 'contents/destroy/:id' => 'contents#destroy'
  
  # routes for bikes inventory "FOR FUTURE IMPLEMENTATION"
  # get 'bikes/index'
  # get 'bikes/new'
  # get 'bikes/show/:id' =>'bikes#show'
  # get 'bikes/edit/:id' => 'bikes#edit'
  # post 'bikes/create' =>'bikes#create'
  # post 'bikes/update/:id' => 'bikes#update'
  # delete 'bikes/destroy/:id' => 'bikes#destroy'

  # route for redirecting user to the home landing page if request is not found
  get '*path' => redirect('/#/home')
  
end
