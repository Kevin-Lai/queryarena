import * as SearchAPIUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchResults = (results) => {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        results
    }
}

export const searchQuery = (query) => {
    return (dispatch) => {
        return SearchAPIUtil.searchQuery(query).then(
            (results) => {
                return dispatch(receiveSearchResults(results));
            }
        )
    }
}