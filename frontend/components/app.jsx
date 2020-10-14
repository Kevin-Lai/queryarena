import React from 'react';
import { Route, Switch } from 'react-router-dom';


// TODO: Later, the index page will be for the questions
//import QuestionIndexContainer from './questions/question_index_container';
//       <Route exact path="/" component={QuestionIndexContainer} />


import UserShowContainer from './users/user_show_container';
import SignUpFormContainer from './sessions/sign_up_form_container';
import SignInFormContainer from './sessions/sign_in_form_container';

const App = ({ children }) => (
  <div>
    <h2>Query Arena</h2>
    <Switch>
      <Route exact path="/" component={SignInFormContainer} />
      {/* <Route exact path="/users/:userId" component={UserShowContainer} /> */}
    </Switch>
  </div>
);

export default App;