class Api::SessionsController < ApplicationController

    before_action :require_signed_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            sign_in(@user)
            render "/api/users/show"
        else  
            render json: @user.errors.full_messages, status: 422
        end

    end

    def destroy
        sign_out
        render json: ['sign out successful']
    end
end

