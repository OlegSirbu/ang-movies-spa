
angular.module('myApp').factory('MoviesServices', ['$http','$route', function($http, $route){
  var url = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/movies/30.json?api-key=52c786f7d5fcb689e304bcbd58687057%3A5%3A73132144';

  //get movies from server
  function getMovies(cb) {
    $http.get(url).then(function (data){
      $route.movies = data.data.results;
      cb.success($route.movies)
    }, cb.failure);
  }

  function getMovie(cb, id){
    var movie;

    if(!!$route.movies){
      movie = getMovieById($route.movies, id);
      cb.success(movie);
    }else{
  		$http.get(url).then(function (data) {
	        movie = getMovieById(data.data.results, id);
	        cb.success(movie);
      	},cb.failure);
    }
  }

  // returned movie object
  function getMovieById(movies, id) {
    return movies.filter(function (obj) {
      return obj.id == id;  
    })[0];
  }

  return {
    getMovies: getMovies,
    getMovie: getMovie
  }
  
}]);