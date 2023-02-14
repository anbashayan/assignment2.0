function initMap() {
    var options = {     
        zoom: 10,
        center: { lat: 25.218460, lng: 55.279171 }
    }
    var map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: { lat: 25.218460, lng: 55.279171 },
        map: map
    });
}