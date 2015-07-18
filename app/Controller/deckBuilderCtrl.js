var mtgApp = angular.module('mtgApp');

mtgApp.controller('DeckBuilderCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('app/Cards/Avacyn_Restored/AVR.json').success(function(deck) {
      $scope.cards = deck.cards;
    });
}])
