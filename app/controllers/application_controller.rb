class ApplicationController < ActionController::Base
    helper_method :current_user, :signed_in?

    # CRLLL

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_signed_in
        unless signed_in?
            render json: ['you are currently not signed in!']
        end
    end
    
    def signed_in?
        !!current_user
    end

    def sign_in(user)
        @current_user = user
        session[:session_token] = current_user.reset_session_token!
    end

    def sign_out
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end


end
