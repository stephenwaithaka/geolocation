document.addEventListener("deviceReady", onDeviceReady, false);

var watchID = null;

function onDeviceReady(){
	var options = {timeout :30000};
	watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}
