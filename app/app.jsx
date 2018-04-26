var ReactDOM  =  require('react-dom');
var React  =  require('react');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Nav  = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


ReactDOM.render(
  <Router history = {hasHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component = {About}></Route>
      <Route path="examples" component = {Examples}></Route>
      <IndexRoute component={Weather} />
    </Route>
    <Route path="navigations" component={Nav}></Route>
  </Router>,
  document.getElementById('app')
);
