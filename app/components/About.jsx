var React = require('react');


// var About = React.createClass({
//   render: function(){
//     return (
//       <h4>Nested About component</h4>
//     );
//   }
// });

var About = (props) => {
  return (
        <div className="text-center">
          <h4 className="quote">About Page</h4>
          <p className="text-primary">This is a weather application built from React. So far it's been a wonderful experience </p>
        </div>
      );
}




module.exports = About;
