'use strict';

var app = angular
    .module('frenchApp', ['ngRoute', 'firebase'])
    
    .constant('FURL', 'https://sbapp01.firebaseio.com/')
    
    .config(function($locationProvider, $routeProvider) {
       $routeProvider
            
            //- Feed Routes
            .when('/', {
                templateUrl: 'html/home.html'
            })

            //- Else
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider
            .html5Mode(true);
});
