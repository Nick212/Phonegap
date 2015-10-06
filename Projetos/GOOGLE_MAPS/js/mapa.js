var pontos = [
    {
        "Latitude": -23.5505199,
        "Longitude": -46.6333094
    },
    {
        "Latitude": -15.1810034,
        "Longitude": -44.8458723
    },
    {
        "Latitude": -23.5848301,
        "Longitude": -46.6755697
    }
]

var map;
 
function initialize() {
    var latlng = new google.maps.LatLng(-18.8800397, -47.05878999999999);
 
    var options = {
        zoom: 5,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map(document.getElementById("mapa"), options);
}
 
initialize();



function carregarPontos() {
 
    
 
        $.each(pontos, function(index, ponto) {
 
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
                title: "Meu ponto personalizado! :-D",
                map: map
            });
 
        });
 
    
 
}
 
carregarPontos();