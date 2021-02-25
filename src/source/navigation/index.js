import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { book } from './book';

import { useAuthentication } from './hooks/useAuthentication';

import { Login } from '../pages/login';
import { Registration } from '../pages/registration';
import { Profile } from '../pages/profile';
import { Dashboard } from './../pages/dashboard';
import { Breakfast } from './../pages/breakfast';
import { Steps } from './../pages/steps/index';
import { Water } from './../pages/water/index';

export const Routes = () => {
  const { isAuthenticated } = useAuthentication();

  return (
    <>
      <Switch>
        
        <Route exact path={book.root}>
          <Redirect to={book.dashboard} />
        </Route>

        <Route
          exact path={book.dashboard}
          render={() => isAuthenticated ? <Dashboard /> : <Redirect to={book.login} />}
        />

        <Route
          exact path={book.login}
          render={() => !isAuthenticated ? <Login /> : <Redirect to={book.dashboard} />}
        />

        <Route
          exact path={book.registration}
          render={() => <Registration />}
        />

        <Route
          exact path={book.profile}
          render={() => isAuthenticated ? <Profile /> : <Redirect to={book.login} />}
        />

        <Route
          path={book.breakfast}
          render={() => isAuthenticated ? <Breakfast /> : <Redirect to={book.login} />}
        />

        <Route
          path={book.lunch}
          render={() => isAuthenticated ? <Breakfast /> : <Redirect to={book.login} />}
        />

        <Route
          path={book.dinner}
          render={() => isAuthenticated ? <Breakfast /> : <Redirect to={book.login} />}
        />

        <Route
          path={book.coffee}
          render={() => isAuthenticated ? <Breakfast /> : <Redirect to={book.login} />}
        />

        <Route
          path={book.steps}
          render={() => isAuthenticated ? <Steps /> : <Redirect to={book.login} />}
        />

        <Route
          path={book.water}
          render={() => isAuthenticated ? <Water /> : <Redirect to={book.login} />}
        />
     
      </Switch>
    </>
  )
};