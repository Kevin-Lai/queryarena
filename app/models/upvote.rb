# == Schema Information
#
# Table name: upvotes
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  answer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Upvote < ApplicationRecord

    # for Rails 5, when you write a belongs_to, it auto validates the presence of that foreign key

    validates :user_id, :answer_id, presence: true
    #validates :user_id, uniqueness: {scope: answer_id}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :answer,
        foreign_key: :answer_id,
        class_name: :Answer

end
