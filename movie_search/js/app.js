var app = angular.module('movie_search', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/:imdbID/show', {
    templateUrl: 'partials/show.html',
    controller: 'movieController'
  })
})
