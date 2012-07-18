(function ($) {
$(document).ready(function(){
getLocation();
  });
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

function showPosition(position)
  {
var geocoder = new google.maps.Geocoder();
          var latlng   = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
var address  = new Object;
          geocoder.geocode({'latLng': latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
for (var i = 0; i < results[0].address_components.length; ++i) {
                  var long_name  = results[0].address_components[i].long_name || '';
                  var short_name = results[0].address_components[i].short_name || '';
                  var type = results[0].address_components[i].types[0];
                  if (long_name != null) {
//alert(type);
                    switch(type) {
                      case 'administrative_area_level_1':
                        address['state'] = long_name;
                        if (short_name != null) {
                          address['state_code'] = short_name;
                        }
                        break;
                      default:
                        address[type] = long_name;
                    }
                  }
                }
alert(address['state']+" - "+address['state_code']);
var url = $("a.state").data("state") === address['state_code'];
var stateLinks = $("a.state[data-state=" + address['state_code'] + ']');
if (stateLinks.length > 0) { 
var url = stateLinks.attr('href');
window.location = url;
}
//alert(url);

}
}
});
 	
  }

})(jQuery);

