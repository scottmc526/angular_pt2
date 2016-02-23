var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/goodbye', {
        templateUrl: 'partials/goodbye.html',
        controller: 'GoodbyeController'
      })
      .when('/hello', {
        templateUrl: 'partials/hello.html',
        controller: 'HelloController'
      })
      .when('/add/:num1/:num2', {
        templateUrl: 'partials/addition.html',
        controller: 'addController'
      })
      .when('/div/:num1/:num2', {
        templateUrl: 'partials/division.html',
        controller: 'divController'
      })
});
