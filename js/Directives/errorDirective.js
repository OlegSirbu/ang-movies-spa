(function () {
angular.module('myApp').directive('error', errorDirective);

errorDirective.$inject = ['$rootScope'];
function errorDirective($rootScope) {
   return {
       restrict:"E",
       template:'<div ng-show="isError" class="alert-danger alert">Error</div>',
       link: function(scope){
          $rootScope.$on('errorEvent', function () {
             scope.isError = true;
          });
         
       }
   }
}	
}())
