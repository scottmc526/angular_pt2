var app = angular.module('cart', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/index.html',
      controller: 'mainController'
    })
    .when('/checkout', {
    templateUrl: 'partials/checkout.html',
    controller: 'checkoutController'
  })
})
