import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { auth } = useContext(AuthContext);

  return auth ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
