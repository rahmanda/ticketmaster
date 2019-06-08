import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export default function Container(props) {
  return (
    <StaticRouter {...props}>
      <App/>
    </StaticRouter>
  );
};
