var map;
function initMap() {
	var seattle = {lat: 47.626353 , lng: -122.333144 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: seattle,
    zoom: 8
  });
    var marker = new google.maps.Marker({
    position: seattle,
    map: map,
    title: 'Hello World!'
      
  });
    marker.addListener('click', function() {
   var test2 =  prompt("HLKHDSLFJL");
    document.getElementById('test').innerHTML = test2;
  });
}

var clr = "red"
function changeColor(element){
 element.style.color=clr;
  if(clr === "red"){
    clr = "black";
  }
  else
    clr = "red";
}

function popup(){
	alert("SYKEEEEEE");
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],
	p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
	{js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
	fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');