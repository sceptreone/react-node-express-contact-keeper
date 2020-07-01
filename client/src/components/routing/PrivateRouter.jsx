import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRouter = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAutheticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAutheticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRouter;
