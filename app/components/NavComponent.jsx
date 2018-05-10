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

var NavComponent = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    alert("getting weather report");
  },
  render: function() {
    return (
      <div className='top-bar new-nav-color'>
        <div className="top-bar-left new-nav-color">
          <ul className="menu">
            <li className='menu-text'>
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
      <div className="top-bar-right">
        <form onSubmit = {this.onSearch}>
          <ul className="menu">
            <li>
              <input type="text" placeholder="Enter City Name" />
            </li>
            <li>
              <input type="submit" className="button" value="Get Weather" />
            </li>
          </ul>
        </form>
      </div>
      </div>
    );
  }
});




module.exports = NavComponent;



{/* <div>
  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink> &nbsp;
  <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>&nbsp;
  <Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>&nbsp;
</div> */}
