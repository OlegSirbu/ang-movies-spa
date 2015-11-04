(function () {
angular.module('myApp').controller('DetailCtrl', DetailCtrl);

DetailCtrl.$inject = ["$scope", "$route", "$location","$rootScope", "MoviesServices"];
function DetailCtrl($scope, $route, $location, $rootScope, MoviesServices) {
  var promise = MoviesServices.getMovies,
      id = $location.url().split('/')[1];

  $scope.back = function () {
    $location.path('/');
  };

  function fnSuccess(data) {
    $scope.article = getMovieById(data.data.results, id);    
  }

  function fnError() { 
    $rootScope.$emit('errorEvent');
  }

  function getMovieById(movies, id) {
    return movies.filter(function (obj) {
      return obj.id == id;  
    })[0];
  }

  if($route.movies){
    $scope.article = getMovieById($route.movies, id);
  }else{
    promise().then(fnSuccess, fnError);
  }

}  
}());