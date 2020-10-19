# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord

    # Validations
    validates :body, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
