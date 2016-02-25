(function() {
    'use strict';

    angular
      .module('travelApp',['ui.router'])
      .config(config)
      .constant('url',{
        'getflighturl': '/getFlight',
        'addflighturl': '/addFlights',
        'getcitiesurl': '/getCities',
        'addcitiesurl': '/addCities'
      })

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
      			 url: '/results',
      			 templateUrl: './views/results.html',
             controller: 'ResultsController',
             controllerAs: 'vm'
    		  })
      };
})();