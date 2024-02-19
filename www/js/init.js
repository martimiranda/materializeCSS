(function ($) {
  $(function () {
    // Inicializar la barra lateral
    $('.sidenav').sidenav();
  }); // end of document ready
})(jQuery); // end of jQuery name space

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova está ahora inicializado. ¡Diviértete!
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  //document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('DOMContentLoaded', function () {
  // Inicializar la barra lateral nuevamente (por si acaso)
  $('.sidenav').sidenav();

  // Inicializar las tabs
  var options = { "swipeable": true };
  var el = document.querySelector('#tabs-swipe-demo');
  var instance = M.Tabs.init(el, options);
});