(function (){
angular.module('myApp').controller('ListCtrl', ListCtrl);

ListCtrl.$inject = ["$scope", "$route", "$location", "$rootScope", "MoviesServices"];
function ListCtrl($scope, $route, $location, $rootScope, MoviesServices) {
  var promise = MoviesServices.getMovies;

  function fnSuccess(data) {
    $route.movies = data.data.results;
    $scope.movies = $route.movies;
  }
  function fnError() {
    $rootScope.$emit('errorEvent');
  }

  $scope.showDetail = function (article) {
    $location.path(article.id);
  };

  if($route.movies){
    $scope.movies = $route.movies;
  }else {
    promise().then(fnSuccess, fnError);
  }
}
}());