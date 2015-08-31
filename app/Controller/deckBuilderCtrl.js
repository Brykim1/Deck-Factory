var mtgApp = angular.module('mtgApp');

mtgApp.controller('DeckBuilderCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

	$scope.allCards;
	$scope.shouldShowFilter = false; 
	$scope.cardMultiverseid = '';
	$scope.cardText = '';
	$scope.selectedCards = [];

	$scope.toggleFilters = function()
	{
		$scope.shouldShowFilter = ($scope.shouldShowFilter == true) ? false : true;
	}

	$scope.onSelect = function ($item) {
		// TODO May need loading screen to ensure that data is available  
		$scope.allCards.forEach(function(element, index, array){
			setSelectedCardValues(element, $item)
		});
	};

	$scope.addCard = function() {

		// NOTE: For testing purposes
		var cardIndex = $scope.selectedCards.indexOf($scope.cardName);

		if($scope.cardName && cardIndex == -1)
		{
			$scope.selectedCards.push($scope.cardName);
		}
	}

	$scope.removeCard = function() {

		// NOTE: For testing purposes
		var cardIndex = $scope.selectedCards.indexOf($scope.cardName);
		
		if($scope.cardName && cardIndex != -1)
		{
			$scope.selectedCards.splice(cardIndex, 1)
		}
	}

	loadCards();

	function loadCards()
	{
		// TODO Move functionality into separate dataservice for retrieving data  
		$http.get('app/Cards/Avacyn_Restored/AVR.json')
			 .success(function(allCards)
			 {
			 	$scope.allCards = allCards.cards;
			 });
	}

	function setSelectedCardValues(element, item)
	{
		if(element.name == item.name)
		{
			$scope.cardName = element.name;
			$scope.cardMultiverseid = element.multiverseid;
			$scope.cardType = element.type;
			$scope.cardManaCost = element.manaCost;
			$scope.cardText = element.text;
			$scope.cardRarity = element.rarity;
		}
	}
}])
