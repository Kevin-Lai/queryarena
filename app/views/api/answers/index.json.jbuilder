json.array! @answers do |answer|
    json.extract! answer, :id, :body, :user_id, :question_id
end