(function() {
    'use strict';

    angular.module('travelApp')
    	.controller('HomeController', HomeController);

        HomeController.$inject = ['url','getDataService']

    function HomeController(url,getDataService){
    	var vm = this;
        vm.searchFlights = searchFlights;
        vm.getCities = getCities;

        getCities();
        function getCities(){
            getDataService.getCities(url.getcitiesurl)
            .then(function(data){
                vm.citylist = data;
                console.log(vm.citylist);
            })
        }

    	function searchFlights(){
    		var parameters = {
                departure_city: vm.departure_city,
                arrival_city: vm.arrival_city
            };

            getDataService.getFlight(url.getflighturl,parameters).then(function(response){
                console.log('Response from service: '+ response);
            })

    	}
    }

})();