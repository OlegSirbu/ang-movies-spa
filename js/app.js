var app = angular.module('myApp', ['ngRoute']);

app.controller('ListCtrl', ListCtrl)
  .controller('DetailCtrl', DetailCtrl);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
      })
      .when('/:id', {
        templateUrl: 'templates/detail.html',
        controller: 'DetailCtrl'
      });
  }
]);

function ListCtrl($scope, $route, $location, MoviesServices) {
  var cb; //cb = callback object
  cb = {
    success: function (data) {
      $scope.movies = data;
    }, 
    failure: function () {}
  };
  
  $scope.showDetail = function (article) {
    $location.path(article.id);
  }

  //getting movies for render
  if($route.movies){
    $scope.movies = $route.movies;
  }else {
    MoviesServices.getMovies(cb);
  }
  
}

function DetailCtrl($scope, $location, MoviesServices) {
  var id, cb;
  $scope.back = function () {
    $location.path('/');
  };

  cb = {
    success: function (article) {
      $scope.article = article;
    },
    failure: function(data) {}
  };

  id = $location.url().split('/')[1];
  if(!!id){
    MoviesServices.getMovie(cb, id);  
  }
}