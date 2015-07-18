var mtgApp = angular.module('mtgApp', ['ngRoute'])

mtgApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/Template/main.html',
        	controller: 'MainCtrl'
		})
		.when('/deck-builder', {
			templateUrl: 'app/Template/deck-builder.html',
        	controller: 'DeckBuilderCtrl'
		})
		.when('/play-test', {
			templateUrl: 'app/Template/play-test.html',
        	controller: 'PlayTestCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
}])