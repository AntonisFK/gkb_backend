angular.module('adminApp', [
'templates',
'ngAnimate',
'Devise',
'ui.router',
'ui.bootstrap',
'textAngular',
'ngSanitize',
'angularModalService',
'ngFileUpload',
'uiRouterStyles'])
.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login/_login.html',
      controller:'loginCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('dashboard');
          })
        }]
      })
    .state('dashboard', {
      url: '/',
      views: {
        '@': {
         templateUrl:'views/dashboardLayout.html'
        },
        'header@dashboard' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'main@dashboard' : {
          templateUrl: 'dashboard/_dashboard.html'
        }
      },
      data: {
        css: ['dashboard/editor.css']
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('newsPage', {
      url:'/news',
      views: {
        '@': {
         templateUrl:'views/newsLayout.html'
        },
        'header@newsPage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'news@newsPage' : {
          templateUrl: 'news/_news.html',
          controller: 'newsCtrl'
        }
      },
      data: {
        css: ['news/newsStyle.css']
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('announcementsPage', {
      url:'/announcements',
      views: {
        '@': {
         templateUrl:'views/newsLayout.html'
        },
        'header@announcementsPage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'news@announcementsPage' : {
          templateUrl: 'bAnnouncements/_announcements.html',
          controller: 'announeCtrl'
        }
      },
      data: {
        css: ['news/newsStyle.css']
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })
    .state('bikePage', {
      url:'/bikes',
      views: {
        '@': {
         templateUrl:'views/newsLayout.html'
        },
        'header@bikePage' : {
          templateUrl: 'header/_header.html',
          controller: 'headerCtrl'
        },
        'news@bikePage' : {
          templateUrl: 'baddBikeForm/_addBikeForm.html',
          controller: 'bikeCtrl'
        }
      },
      data: {
        css: ['news/newsStyle.css']
      },
      onEnter: ['$state','Auth', function($state, Auth) {
        Auth.currentUser().then(function(){
        }, function(){
          $state.go('login')
        })
      }]
    })

  $urlRouterProvider.otherwise('/');

});
