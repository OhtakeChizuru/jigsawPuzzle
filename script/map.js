// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  const metro = { lat: 40.77966405628911, lng: -73.9627719333883 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: uluru,
  });
  const contentStr =
    "<p>" +
    // '<img src="./img/home.png" width="24" height="24" alt="home" />' +
    '<a href="https://www.metmuseum.org/visit/plan-your-visit/met-fifth-avenue/japanese/">メトロポリタン美術館</a>' +
    "</p>";
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: metro,
    map: map,
  });

  const infowindow = new google.maps.InfoWindow({
    content: contentStr,
    position: metro,
  });
  infowindow.open(map);
}
