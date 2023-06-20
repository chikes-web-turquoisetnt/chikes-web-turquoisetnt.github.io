document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    h = document.getElementById("popdown").style.height;
    document.getElementById("popdown").style.visibility = "hidden";
    document.getElementById("popdown").style.height = 0;
}
function so(){
    document.getElementById("popdown").style.visibility = "visible";
    document.getElementById("popdown").style.height = h;
}
