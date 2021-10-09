import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);
    
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            const results = {};
            action.results.map(question => results[question.id] = question);
            newState = results;
            return newState;
        default:
            return state;
    }
}

export default SearchReducer;