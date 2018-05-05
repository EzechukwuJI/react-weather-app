var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal     = require('ErrorModal');


var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      errormsg: ""
    }
  },

  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      alert(errorMessage);
    })
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;
    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather report...</h3>
      } else if(temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }
    function renderError(){
      if(typeof(errorMessage) ==='string'){
        return (
          <ErrorModal  message={errorMessage}/>
        );
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
