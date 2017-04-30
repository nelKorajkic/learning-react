/*jshint esversion:6*/
//1. require react and reactDOM`
var React = require('react');
var ReactDOM = require('react-dom');

//1.5 require your css too
require('./index.css');

//2. each component has these things associated with it
//state
//lifecycle events
// UI

//3. define the COMPONENT
class App extends React.Component {
  render() {
    return (
      <div>
        Hello WWOorld!
      </div>
    )
  }
}
//4. Each component must have a UI render
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
