// Create a <PrivateRoute /> component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
// Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.

import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// Privte Route 3 rules: 
// 1. it has the same API as <Route />
// 2. it renders a <Route /> and passes all props to it
// 3. it checks if the user is authenticated, if yes: it renders the 'component' prop, if no: it redirects the user to '/login'

const PrivateRoute = ({component: Component, ...rest}) => {
  // const Component = props.component; == component: component
  // use ...rest bc you cant use render and component
  return (
    <Route {...rest} render={() => {
      if (localStorage.getItem('token')) {
        return <Component />;
      } else {
        return <Redirect to='/login' />;
        // if the login credentials dont match, then redirect to the login page
      }
    }}
    />
  );
}

export default PrivateRoute;