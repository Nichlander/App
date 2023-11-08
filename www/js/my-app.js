// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      { path: '/index/',            url: 'index.html', },
      { path: '/registro/',         url: 'registro.html', },
      { path: '/confirmacion/',     url: 'confirmacion.html', },
      { path: '/info/',             url: 'info.html', },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})



// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    $$("#btnRegistro").on("click", fnregistro);
})

$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
    $$("#btnFinRegistro").on("click", fnFinRegistro);
})

$$(document).on('page:init', '.page[data-name="confirmacion"]', function (e) {
    $$("#confNombre").text(nombre)
    $$("#confEmail").text(email)
})

$$(document).on('page:init', '.page[data-name="info"]', function (e) {
    
}) 









    /* Mis funciones */
var email, clave, nombre, apellido
function fnregistro() {
  email = $$("indexEmail").val();
  clave = $$("indexClave").val();

  if (email!="" && clave!="") {
      mainView.router.navigate("/registro/");

  }
}

function fnFinRegistro() {
  nombre = $$("regNombre").val();
  apellido = $$("regApellido").val();

  if (nombre!="" && apellido!="") {
      mainView.router.navigate("/confirmacion/");

  }
}