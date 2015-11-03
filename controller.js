var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, mainService) {

	$scope.quotes = mainService.getData();



});