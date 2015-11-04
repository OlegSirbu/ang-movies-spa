angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
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
