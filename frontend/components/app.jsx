import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

// TODO: Later, the index page will be for the questions
//import QuestionIndexContainer from './questions/question_index_container';
//       <Route exact path="/" component={QuestionIndexContainer} />


import UserShowContainer from './users/user_show_container';
// import SignUpFormContainer from './session/sign_up_form_container';
// import SignInFormContainer from './session/sign_in_form_container';

import SessionFormContainer from "./session/session_form_container";

const App = ({ children }) => (
  <div>
    {/* <h2>Query Arena</h2> */}
    <Switch>
      <Route exact path="/users/:userId" component={UserShowContainer} />
      {/* <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/signin" component={SignInFormContainer} /> */}
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/signin" component={SessionFormContainer} />
      <Route path="/" component={SessionFormContainer} /> 
    </Switch>
  </div>
);

export default App;