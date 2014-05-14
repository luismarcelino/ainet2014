
function initialize(){
var mapProp = {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var map2=new google.maps.Map(document.getElementById("googleMap2"),mapProp);
var map3=new google.maps.Map(document.getElementById("googleMap3"),mapProp);
var map4=new google.maps.Map(document.getElementById("googleMap4"),mapProp);
var map5=new google.maps.Map(document.getElementById("googleMap5"),mapProp);
var map6=new google.maps.Map(document.getElementById("googleMap6"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);




