function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
	
	
}

angular
	.module('app')
	.controller('ContactController', ContactController);