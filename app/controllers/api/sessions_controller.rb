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
            #debugger
            render json: ["Invalid Username or Password. Please try again."], status: 401
        end

    end

    def destroy
        sign_out
        render json: ['Sign Out Successful!']
    end
end

