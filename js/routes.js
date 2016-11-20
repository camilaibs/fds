angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('telefone', {
    url: '/callback',
    templateUrl: 'templates/telefone.html',
    controller: 'telefoneCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('intruEs', {
    url: '/instrucoes',
    templateUrl: 'templates/intruEs.html',
    controller: 'intruEsCtrl'
  })

  .state('percurso', {
    url: '/percurso',
    templateUrl: 'templates/percurso.html',
    controller: 'percursoCtrl'
  })

  .state('companhias', {
    url: '/companhias',
    templateUrl: 'templates/companhias.html',
    controller: 'companhiasCtrl'
  })

  .state('avaliaOCamila', {
    url: '/avaliacao',
    templateUrl: 'templates/avaliaOCamila.html',
    controller: 'avaliaOCamilaCtrl'
  })

  .state('avaliaOThais', {
    url: '/page12',
    templateUrl: 'templates/avaliaOThais.html',
    controller: 'avaliaOThaisCtrl'
  })

  .state('navegaO', {
    url: '/navegacao',
    templateUrl: 'templates/navegaO.html',
    controller: 'navegaOCtrl'
  })

  .state('chat', {
    url: '/chat',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

$urlRouterProvider.otherwise('/instrucoes')

  

});