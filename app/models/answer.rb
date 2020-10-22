# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  body        :string           not null
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Answer < ApplicationRecord

    validates :body, :user_id, :question_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :question,
        foreign_key: :question_id,
        class_name: :Question
    
end
