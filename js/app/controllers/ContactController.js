function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
	
	$timeout(function () {
    // this would be fired after 2 seconds!
  }, 2000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);