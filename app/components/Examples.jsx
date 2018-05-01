var React = require('react');
var {Link} = require('react-router');


var Examples = React.createClass({
  render: function(){
    return (
      <div className="text-center">
        <p className="text-center">Here are a few example locations to try out </p>
        <ol>
          <li><Link to="/location=lagos">Lagos, Nigeria</Link></li>
          <li><Link to="/location=benin">Benin, Nigeria</Link></li>
          <li><Link to="/location=moscow">Moscow, Russia</Link></li>
          <li><Link to="/location=france">Paris, France</Link></li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
