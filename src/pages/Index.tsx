
import React from 'react';
import { Navigate } from 'react-router-dom';
import HomePage from './home';

// This file redirects to the new home page
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
