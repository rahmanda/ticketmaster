const path = require('path');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const app = require('../tmp/main').default;

const appHtml = ReactDOMServer.renderToString(React.createElement(app, { location: {pathname: '/'} }));

const indexFile = path.resolve(__dirname, '../docs/index.html');
fs.readFile(indexFile, 'utf-8', function doneRead(readError, data) {
  if (readError) {
    console.error('Reading file went wrong: ', readError);
  }
  else {
    const indexHtml = data
          .replace('<!-- react-ssr -->', appHtml)
          .replace('<link href="/ticketmaster/main.css" rel="stylesheet">', '');
    fs.writeFile(indexFile, indexHtml, 'utf-8', function doneWrite(writeError) {
      if (writeError) {
        console.error('Writing file went wrong:', writeError);
      }
      else {
        console.log('Done!');
      }
    });
  }
});
