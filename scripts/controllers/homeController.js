(function() {
    'use strict';

    angular.module('travelApp')
    	.controller('HomeController', HomeController);

        HomeController.$inject = ['getDataService']

    function HomeController(getDataService){
    	var vm = this;
    	vm.searchFlights = searchFlights;




    	function searchFlights(){
    		console.log(vm.departure_city);
    	}
    }

})();