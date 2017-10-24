
function initMap() {

  var map = new img.maps.Map(document.getElementById('Ahuachapan');
    
   
  };







var contentString = '<div id="content">'+
      
      '</div>';


      var infowindow = new img.maps.InfoWindow({
    content: contentString
  });

  var marker = new img.maps.Marker({
   
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}