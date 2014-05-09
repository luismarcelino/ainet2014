$(document).ready(function(){
    
    
     //Google maps
    function initialize() {
        var coordinates = new google.maps.LatLng(39.744110, -8.804960);

        var mapProp = {
            center: coordinates,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            title: 'Santa Casa da Misericórdia de Leiria'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});