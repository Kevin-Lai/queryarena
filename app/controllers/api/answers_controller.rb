class Api::AnswersController < ApplicationController
    
    def create
        @answer = Answer.new(answer_params)
        @answer.user_id = current_user.id

        if @answer.save
            render "/api/questions/show"
        else
            render json: @answer.errors.full_messages, status: 422
        end

    end

    def index
        @answers = Answer.all.where(question_id: params[:question_id])
        render :index
    end

    def show
        @answer = Answer.includes(:question, :user).find_by(id: params[:id])
        if @answer
            render :show
        else
            # if question is not found, return 404 error
            render json: @answer.errors.full_messages, status: 404
        end
    end

    def update
        @answer = Answer.includes(:question, :user).find_by(id: params[:id])
        if @answer.update(answer_params)
            render "/api/questions/show"
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def destroy
        @answer = Answer.includes(:question, :user).find_by(id: params[:id])
        if @answer.destroy
            render "/api/questions/show"
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    private
    def answer_params
        params.require(:answer).permit(:body, :user_id, :question_id)
    end
end
