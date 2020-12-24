class Api::SearchController < ApplicationController
    def index
        @questions = Question.all.where( ['LOWER(body) LIKE ?', "%#{params[:query].downcase}%"])
        render :index
    end

    private
    def search_params
        params.require(:query)
    end
end
