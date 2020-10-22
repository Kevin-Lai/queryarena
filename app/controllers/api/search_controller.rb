class Api::SearchController < ApplicationController
    def index
        @questions = Question.all.where( ['BODY LIKE ?', "%#{params[:query]}%"]) 
        render :index
    end

    private
    def search_params
        params.require(:query)
    end
end
