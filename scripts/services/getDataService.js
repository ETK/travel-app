(function() {
    'use strict';
    angular.module('travelApp')
    	.factory('getDataService', getDataService);

    	getDataService.$inject = ['$http'];
    	function getDataService($http){

    		var service = {
    			getFlight: getFlight
    		};

    		return service;

    		function getFlight (url,data){
    			return $http.get(url)
    					.then(getFlightDataComplete)
    					.catch(getFlightDataFailed);
    					
    			function getFlightDataComplete(response){
    				return response.data;
    			}

    			function getFlightDataFailed(error){
    				console.log('XHR Failed for getFlight.' + error.data);
    			}	
    		};
    	}





})();