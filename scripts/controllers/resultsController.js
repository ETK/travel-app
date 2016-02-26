(function() {

	'use strict';
	angular.module('travelApp')
    	.controller('ResultsController', ResultsController);

    	function ResultsController(){
    		var vm = this;
            var listvalues = {
                depart: true,
                arrive: true,
                price: true
            }
    		vm.airline_name="Jet Airways";
    		vm.getHours = getHours;
    		vm.getMinutes = getMinutes;
            vm.sort = sort;

    		function getHours(time){
    			var date = new Date(time);
    			return date.getHours();
    		}

    		function getMinutes(time){
    			var date = new Date(time);
    			return date.getMinutes();
    		}

            function sort(type){
                switch(type) {
                    case "price":
                            sortPrice(listvalues.price);
                            listvalues.price = !listvalues.price;
                        break;
                    case "depart":
                            sortDepart(listvalues.depart);
                            listvalues.depart = !listvalues.depart;
                        break;
                    case "arrive":
                            sortDepart(listvalues.arrive);
                            listvalues.arrive = !listvalues.arrive;
                        break;
                }
            }

            function sortPrice(value){

                    if(value == true){
                        vm.data.sort(function(a, b) {
                            return parseInt(a.ticket_price) - parseInt(b.ticket_price);
                        });
                    }
                    if (value == false){
                        vm.data.sort(function(a, b) {
                            return parseInt(b.ticket_price) - parseInt(a.ticket_price) ;
                        });
                    }
                
            }

            function sortDepart(value){
                    if(value == true){
                        vm.data.sort(function(a, b) {
                            return parseInt(a.departure_time) - parseInt(b.departure_time);
                        });
                    }
                    if (value == false){
                        vm.data.sort(function(a, b) {
                            return parseInt(b.departure_time) - parseInt(a.departure_time) ;
                        });
                    }
            }
            function sortArrive(value){
                    if(value == true){
                        vm.data.sort(function(a, b) {
                            return parseInt(a.arrival_time) - parseInt(b.arrival_time);
                        });
                    }
                    if (value == false){
                        vm.data.sort(function(a, b) {
                            return parseInt(b.arrival_time) - parseInt(a.arrival_time) ;
                        });
                    }
            }









    		vm.data = [
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 833,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451600000000,
    "arrival_time": 1451620000000,
    "ticket_price": 3603
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 563,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451670000000,
    "arrival_time": 1451590000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 133,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451610000000,
    "arrival_time": 1451620000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 109,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451610000000,
    "arrival_time": 1451620000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 115,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451620000000,
    "arrival_time": 1451630000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 805,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451650000000,
    "arrival_time": 1451660000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 107,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451660000000,
    "arrival_time": 1451670000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 131,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451660000000,
    "arrival_time": 1451670000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 141,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451660000000,
    "arrival_time": 1451590000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 121,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451620000000,
    "arrival_time": 1451630000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 147,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451630000000,
    "arrival_time": 1451640000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "IndiGo",
    "carrier_code": "6E",
    "flight_number": 481,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451650000000,
    "arrival_time": 1451660000000,
    "ticket_price": 4450
  },
  {
    "airline_name": "Spicejet",
    "carrier_code": "SG",
    "flight_number": 149,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451590000000,
    "arrival_time": 1451600000000,
    "ticket_price": 3629
  },
  {
    "airline_name": "Spicejet",
    "carrier_code": "SG",
    "flight_number": 137,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451610000000,
    "arrival_time": 1451620000000,
    "ticket_price": 3629
  },
  {
    "airline_name": "Spicejet",
    "carrier_code": "SG",
    "flight_number": 139,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451650000000,
    "arrival_time": 1451660000000,
    "ticket_price": 4444
  },
  {
    "airline_name": "Spicejet",
    "carrier_code": "SG",
    "flight_number": 141,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451660000000,
    "arrival_time": 1451670000000,
    "ticket_price": 4444
  },
  {
    "airline_name": "Vistara",
    "carrier_code": "UK",
    "flight_number": 889,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451610000000,
    "arrival_time": 1451620000000,
    "ticket_price": 4041
  },
  {
    "airline_name": "AirAsia",
    "carrier_code": "I5",
    "flight_number": 2221,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451610000000,
    "arrival_time": 1451620000000,
    "ticket_price": 4174
  },
  {
    "airline_name": "AirAsia",
    "carrier_code": "I5",
    "flight_number": 2227,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451650000000,
    "arrival_time": 1451660000000,
    "ticket_price": 4174
  },
  {
    "airline_name": "AirAsia",
    "carrier_code": "I5",
    "flight_number": 1817,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451660000000,
    "arrival_time": 1451670000000,
    "ticket_price": 4174
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 807,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451610000000,
    "arrival_time": 1451620000000,
    "ticket_price": 4606
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 817,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451620000000,
    "arrival_time": 1451630000000,
    "ticket_price": 4606
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 7125,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451620000000,
    "arrival_time": 1451630000000,
    "ticket_price": 4606
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 815,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451630000000,
    "arrival_time": 1451640000000,
    "ticket_price": 4606
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 819,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451650000000,
    "arrival_time": 1451660000000,
    "ticket_price": 4606
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 834,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451650000000,
    "arrival_time": 1451660000000,
    "ticket_price": 4606
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 827,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451660000000,
    "arrival_time": 1451670000000,
    "ticket_price": 4606
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 823,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451660000000,
    "arrival_time": 1451590000000,
    "ticket_price": 6050
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 811,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451670000000,
    "arrival_time": 1451590000000,
    "ticket_price": 6050
  },
  {
    "airline_name": "Jet Airways",
    "carrier_code": "9W",
    "flight_number": 7076,
    "departure_city": "new delhi",
    "arrival_city": "bangalore",
    "departure_time": 1451610000000,
    "arrival_time": 1451620000000,
    "ticket_price": 6050
  }
];



    	}







})();