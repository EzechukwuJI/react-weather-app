var React = require('react');
var {Link, IndexLink} = require('react-router');

// var NavComponent = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink> &nbsp;
//         <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>&nbsp;
//         <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>&nbsp;
//       </div>
//     );
//   }
// });

var NavComponent = (props) => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink> &nbsp;
      <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>&nbsp;
      <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>&nbsp;
    </div>
  );
}


module.exports = NavComponent;
