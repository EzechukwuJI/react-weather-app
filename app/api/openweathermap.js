var axios = require('axios');

//api_key = 52e3c0d201a7883168a5b22b995f81da
//url = http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=52e3c0d201a7883168a5b22b995f81da&units=metric"

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location); // url encodes the location string
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // The `${}` called Template Strings allows us to concatenate strings such as a url, easily.

    console.log(requestUrl);
    // make actual request
    return axios.get(requestUrl).then(
      function(res){
      // success case:  pass in code execution if request was successful
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error("this is the error we ");
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      // error case: code for failed request, this could be for so many reasons.
      throw new Error(res.data.message);
      // alert(res.data);

    });

  }
}
