var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      errormsg: ""
    }
  },

  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});
    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (errorMessage){
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    })
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function(){
    var {isLoading, temp, location} = this.state;
    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather report...</h3>
      } else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
