import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import { AuthRoute, ProtectedRoute, EntryRoute } from '../util/route_util';

import UserShowContainer from './users/user_show_container';
import SessionFormContainer from "./session/session_form_container";
import QuestionShowContainer from './questions/question_show_container';
import AnswerIndexContainer from './answers/answer_index_container';

import Modal from "./modal/modal";

import SearchIndexContainer from "./search/search_index_container";
import NavBarContainer from './nav_bar/nav_bar_container';

const App = ({ children }) => (
  <div>
    <Modal/>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
      <ProtectedRoute exact path="/questions/:questionId" component={QuestionShowContainer} />
      <ProtectedRoute path="/search" component={SearchIndexContainer} />
      <ProtectedRoute path="/answers" component={AnswerIndexContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/signin" component={SessionFormContainer} />
      <EntryRoute exact path="/"/>
      <Redirect from="/*" to="/"/>
    </Switch>
  </div>
);

export default App;