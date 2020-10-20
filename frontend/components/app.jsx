import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import { AuthRoute, ProtectedRoute, EntryRoute } from '../util/route_util';

// TODO: Later, the index page will be for the questions
//import QuestionIndexContainer from './questions/question_index_container';
//       <Route exact path="/" component={QuestionIndexContainer} />


import UserShowContainer from './users/user_show_container';
import SessionFormContainer from "./session/session_form_container";
import NavBarContainer from './nav_bar/nav_bar_container';

import Modal from "./modal/modal";

const App = ({ children }) => (
  <div>
    {/* <h2>Query Arena</h2> */}

    <Modal/>
    
    <Switch>
      <Route exact path="/users/:userId" component={UserShowContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/signin" component={SessionFormContainer} />

      {/* <ProtectedRoute exact path="/" component={NavBarContainer} />
      <AuthRoute exact path="/" component={ SessionFormContainer } /> */}
      <EntryRoute exact path="/"/>

      <Redirect from="/*" to="/"/>
    </Switch>
  </div>
);

export default App;