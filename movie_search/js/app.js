var app = angular.module('movie_search', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/:input', {
      templateUrl: 'partials/index.html',
      controller: 'mainController'
    })
    .when('/:imdbID/show', {
    templateUrl: 'partials/show.html',
    controller: 'movieController'
  })
})
