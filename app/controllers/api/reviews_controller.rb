class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy]
end