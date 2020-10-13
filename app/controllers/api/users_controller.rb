class Api::UsersController < ApplicationController

    # Users Routes
    # resources :users, only: [:create, :show]

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show 
        else  
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show

        @user = User.find_by(id: params[:id])

        # By default, there is an implicit "render :same_name_as_action"
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end

end
