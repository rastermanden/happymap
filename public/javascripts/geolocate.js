
var positionDiv;
function getLocation()
  {
      positionDiv = document.getElementById("location");
      if (navigator.geolocation)
      {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      }
else{positionDiv.innerHTML = "Geolocation is not supported by this browser.";}
}
function showPosition(position)
  {
      positionDiv.innerHTML = "Latitude: " + position.coords.latitude +
          "<br/>Longitude: " + position.coords.longitude;
      }
function showError(error)
  {
      alert("error: " + error);
      switch(error.code)
      {
      case error.PERMISSION_DENIED:
      positionDiv.innerHTML="User denied the request for Geolocation."
      break;
      case error.POSITION_UNAVAILABLE:
      positionDiv.innerHTML="Location information is unavailable."
      break;
      case error.TIMEOUT:
      positionDiv.innerHTML="The request to get user location timed out."
      break;
      case error.UNKNOWN_ERROR:
      positionDiv.innerHTML="An unknown error occurred."
      break;
      }
}
