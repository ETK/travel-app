(function() {
    'use strict';

    angular
      .module('travelApp',['ui.router'])
      .config(config)
      .constant('getflighturl','/getFlight')
      .constant('addflighturl','/addFlights')
      .constant('getcitiesurl','/getCities')
      .constant('addcitiesurl','/addCities');

      config.$inject = ['$stateProvider', '$urlRouterProvider'];
      
      function config($stateProvider,$urlRouterProvider){
		    // For any unmatched url, redirect to /state1
  		  $urlRouterProvider.otherwise('/');
        $stateProvider
  			  .state('home',{
      		    url: '/',
      		    templateUrl: './views/home.html',
              controller: 'HomeController',
              controllerAs: 'vm'
    		  })
    		  .state('results',{
      			 url: '/',
      			 templateUrl: './views/results.html'
    		  })
      };
})();