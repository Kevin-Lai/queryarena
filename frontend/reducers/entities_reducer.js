import { combineReducers } from 'redux';
import UsersReducer from "./users_reducer"
import QuestionsReducer from "./questions_reducer"
import AnswersReducer from "./answers_reducer"
import UpvotesReducer from "./upvotes_reducer"

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    questions: QuestionsReducer,
    answers: AnswersReducer,
    upvotes: UpvotesReducer
})

export default EntitiesReducer;