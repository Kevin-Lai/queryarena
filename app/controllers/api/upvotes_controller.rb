class Api::UpvotesController < ApplicationController

    def create
        @upvote = Upvote.new(upvote_params)
        @upvote.user_id = current_user.id

        # Each user is only allowed to have 1 upvote per answer
        if @upvote.save
            # success
        else
            render json: @upvote.errors.full_messages, status: 422
        end
    end

    def destroy
        @upvote = current_user.upvotes.find_by(id: params[:id])

        if @upvote.user_id == current_user.id
            @upvote.destroy
        else
            render json: @upvote.errors.full_messages, status: 422
        end
    end

    private
    def upvote_params
        params.require(:upvote).permit(:user_id, :answer_id)
    end

end
