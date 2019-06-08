import React from 'react';
import { StaticRouter } from 'react-router';
import App from './App';

export default function Container(props) {
  return (
    <StaticRouter {...props}>
      <App/>
    </StaticRouter>
  );
};
