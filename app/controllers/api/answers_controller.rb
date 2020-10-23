class Api::AnswersController < ApplicationController
    
    # index and show routes are unnecessary
    # because the answers are shown on the same page
    # as the question that they belong to

    def create
        @answer = Answer.new(answer_params)
        @answer.user_id = current_user.id

        if @answer.save
            render "/api/questions/show"
        else
            render json: @answer.errors.full_messages, status: 422
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
