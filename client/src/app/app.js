angular.module('adminApp', ['ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: './login/login.html',
      controller: 'loginCtrl'
    })
})