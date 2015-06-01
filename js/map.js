var Latitude, Longitude, myCenter;
var count = 0;

function getLocation() {
	'use strict';
	count++;
	if (navigator.geolocation && count === 1) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else if (!navigator.geolocation) {
		alert("Sorry, but your Browser does not support detecting of your geographical position!");
	}
}

function showPosition(position) {
	Latitude = position.coords.latitude;
	Longitude = position.coords.longitude;
	initializeMap();
	printPosition();
}

function initializeMap() {
	myCenter = new google.maps.LatLng(Latitude, Longitude);
	var mapProp = {
		center: myCenter,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	var marker = new google.maps.Marker({
		position: myCenter,
		animation: google.maps.Animation.BOUNCE
	});

	marker.setMap(map);
}

function printPosition() {
	var res = document.getElementById("res");
	res.innerHTML += "Your coordinates are: " + "<br/>";
	res.innerHTML += "Latitude: " + Latitude + "<br/>";
	res.innerHTML += "Longitude: " + Longitude;
	res.style.padding = "10px";
}
window.addEventListener("load", getLocation, false);