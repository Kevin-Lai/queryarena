class Api::UsersController < ApplicationController

    # Users Routes
    # resources :users, only: [:create, :show]

    def create
        @user = User.new(user_params)

        if @user.save
            sign_in(@user)
            render :show 
        else  
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show

        @user = User.find_by(id: params[:id])
        #debugger
        # By default, there is an implicit "render :same_name_as_action"
        if @user
            render :show
        else
            # if user is not found, return 404 error
            render json: @user.errors.full_messages, status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end

end
