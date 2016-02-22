(function() {
    'use strict';

    angular.module('travelApp')
    	.controller('HomeController', HomeController);

    function HomeController(){
    	var vm = this;
    	vm.searchFlights = searchFlights;




    	function searchFlights(){
    		console.log(vm.departure_city);
    	}
    }

})();