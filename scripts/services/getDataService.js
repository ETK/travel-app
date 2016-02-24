(function() {
    'use strict';
    angular.module('travelApp')
    	.factory('getDataService', getDataService);

    	getDataService.$inject = ['$http'];
    	function getDataService($http){

    		var service = {
    			getFlight: getFlight,
                getCities: getCities
    		};

    		return service;

    		function getFlight (url,parameters){
    			return $http({
                    url:url,
                    method: 'GET',
                    params: parameters
                })
    			.then(getFlightDataComplete)
    			.catch(getFlightDataFailed);
    					
    			function getFlightDataComplete(response){
    				return response.data;
    			}

    			function getFlightDataFailed(error){
    				console.log('XHR Failed for getFlight: ' + error.data);
    			}	
    		};

            function getCities (url){
                return $http({
                    url:url,
                    method: 'GET'
                })
                .then(getCityDataComplete)
                .catch(getCityDataFailed);

                function getCityDataComplete(response){
                    return response;
                }

                function getCityDataFailed(error){
                    console.log('XHR Failed for getCities: ' + error.data);
                }
            };
    	}





})();