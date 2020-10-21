class Api::QuestionsController < ApplicationController
    def new
        @question = Question.new
        render :new
    end
    
    def create
        @question = Question.new(question_params)
        @question.user_id = current_user.id

        if @question.save
            redirect_to api_question_url(@question)
            #redirect_to api_question_url(@question.id)
            # render "/api/questions/show"
        else
            render json: @question.errors.full_messages, status: 422
        end

    end

    def index
        @questions = Question.all
        render :index
    end

    def show
        @question = Question.find_by(id: params[:id])
        if @question
            render :show
        else
            # if question is not found, return 404 error
            render json: @question.errors.full_messages, status: 404
        end
    end

    private
    def question_params
        params.require(:question).permit(:body, :user_id)
    end
end
