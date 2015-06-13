angular.module('agenda.module')
  .controller('ratingCtrl', function($scope) {
    $scope.rating = 5;
    $scope.rateFunction = function(rating) {
      alert('Thanks for the Rating selected - ' + rating);
    };
  });