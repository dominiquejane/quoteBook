var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, mainService) {

	$scope.quotes = mainService.getData();
	$scope.addData = function(input) {
		mainService.addData(input);
		$scope.inputQuote.author = "";
		$scope.inputQuote.text = "";
	}

	$scope.removeData = function(input) {
		mainService.removeData(input);
		$scope.removeQuote = "";
	}

});