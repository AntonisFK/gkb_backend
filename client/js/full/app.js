var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
	
	myApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'static/partials/home.html',
				controller: 'homeCtrl'
			})
			.when('/volunteers', {
				templateUrl: 'static/partials/volunteer.html',
				controller: 'volunteersCtrl'
			})
			.when('/donations', {
				templateUrl: 'static/partials/donate.html',
				controller: 'donationsCtrl'
			})
			.when('/shop', {
				templateUrl: 'static/partials/shop.html',
				controller: 'storeCtrl'
			})
			.when('/gkbwarranty', {
				templateUrl: 'static/partials/gkbwarranty.html',
				controller: 'warrantyCtrl'
			})
			.when('/gkbpolicy', {
				templateUrl: 'static/partials/gkbpolicy.html',
				controller: 'policyCtrl'
			})
			.when('/news', {
				templateUrl: 'static/partials/news.html',
				controller: 'newsCtrl'
			})
			.when('/faq', {
				templateUrl: 'static/partials/news.html',
				controller: 'newsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
myApp.factory('locFactory', locFactory);
// locFactory function
function locFactory($location) {
	var factory = {
		currentUrl: '/'
	};

	return factory;
}
myApp.controller('donationsCtrl', function($scope) {
	
});
myApp.controller('footerCtrl', function($scope) {
	$scope.newSubscriber = {};
	$scope.create = create;

	// Function implementations
	function create() {
		// We're gonna call the factory which will use $http.post to add a subscriber to the database
		return true;
	}
});
myApp.controller('headerCtrl', headerCtrl);
// Controller Implementation
function headerCtrl($scope, $location, $interval, locFactory) {
	var vm = this;
	$scope.currentUrl = locFactory.currentUrl;
	
	$scope.checkUrl = checkUrl;

	function checkUrl() {
		$scope.currentUrl = locFactory.currentUrl
	}

	$interval($scope.checkUrl, 700);
}
myApp.controller('homeCtrl', function($scope) {
	
});
myApp.controller('navCtrl', function($scope, $location, $window, locFactory) {
	$scope.small = false;
	$scope.showLinks = showLinks;
	$scope.changePage = changePage;
	$scope.currentUrl = locFactory.currentUrl;

	$scope.$watch('currentUrl', function() {
		locFactory.currentUrl = $scope.currentUrl;
	});

	function changePage(place) {
		$scope.currentUrl = place;
		return true;
	}

	function showLinks() {
		if ($scope.small === false) {
			$scope.small = true;
		} else {
			$scope.small = false;
		}
	}

});
myApp.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});
myApp.controller('newsCtrl', function($scope) {

});
myApp.controller('storeCtrl', function($scope) {

});
myApp.controller('warrantyCtrl', function($scope) {

});
myApp.controller('policyCtrl', function($scope) {

});
myApp.controller('volunteersCtrl', function($scope) {

});