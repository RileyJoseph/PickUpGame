// $(function(){
//   $('#datetimepicker6').data("DateTimePicker").FUNCTION()
//   $('#datetimepicker1').datetimepicker();
// });

var drawMap = function(markers) {

  L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94bXVzZXIiLCJhIjoieHFGREtOayJ9.hL24qodaqmeO4THTkkdVaw';

  var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/mapboxmuser.lo0g60ol/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
  });

  var map = L.map('map').addLayer(mapboxTiles)

   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      map.setView([position.coords.latitude, position.coords.longitude], 14);
    })
   }

   markers.forEach(function(marker) {
    console.log(marker);
    L.marker([marker.lat, marker.lng]).addTo(map).bindPopup(marker.name)
   })
}

