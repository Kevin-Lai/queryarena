json.array! @questions do |question|
    json.extract! question, :id, :body, :user_id, :answers
end