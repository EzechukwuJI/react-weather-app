var React  =  require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0){
      this.refs.location.value = "";
      this.props.onSearch(location);
    } else {
      this.refs.location.value = "Kindly enter a location. Olodo!";
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type ="text" ref="location" placeholder="Enter city name" /><br/>
          <br/>
         <button ref="get_weather" className="button hollow new-nav-color">Get Weather</button>
        </form>
      </div>
    );
  }
});


module.exports = WeatherForm;
