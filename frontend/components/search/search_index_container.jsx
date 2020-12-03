import { connect } from 'react-redux';

// withRouter will give you access to the history, location, params
import { withRouter } from 'react-router-dom'

import SearchIndex from './search_index';
import { searchQuery } from "../../actions/search_actions"

const mdtp = (dispatch) => {
    return {
        searchQuery: (query) => dispatch(searchQuery(query))
    }
}

export default withRouter(connect(null, mdtp)(SearchIndex));
