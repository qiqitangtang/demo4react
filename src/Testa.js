import React, { Component } from 'react';
import ReactDOM from 'react-dom';


var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello World！</h1>;
  }
});

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('example')
);