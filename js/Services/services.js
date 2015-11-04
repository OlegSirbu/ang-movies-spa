angular.module('myApp').factory('MoviesServices', ['$http', function($http){
  var url = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144';

  return {
    getMovies: function () {
     	return $http.get(url)
    }
  }

}]);