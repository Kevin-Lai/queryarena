json.extract! @question, :id, :body, :user_id

json.answers @question.answers, :id, :body, :upvotes, :user_id