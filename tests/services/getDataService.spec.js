describe('Suite of tests for getData Service',function(){
// Sample data Required
	var getcitiesurl = '/getCities';
	var httpMock;
	var citydata = [
  {
    "city_name": "new delhi",
    "city_code": "DEL"
  },
  {
    "city_name": "mumbai",
    "city_code": "BOM"
  }
];
	beforeEach(module('travelApp'));

	beforeEach(inject(function($httpBackend, getDataService) {
      httpBackend = $httpBackend;
      httpBackend.when('GET', '/getCities').respond(citydata);
      service = getDataService;
     
  	}));
  	


  	afterEach(function() {
  		httpBackend.verifyNoOutstandingExpectation();
  		httpBackend.verifyNoOutstandingRequest();
	});

	it('should have the methods defined', function(){
		expect(service.getCities).toBeDefined();
		expect(service.getFlight).toBeDefined();

	});

	it('should check whether the service is hitting the correct API', function(){
		
		httpBackend.expectGET(getcitiesurl);
		service.getCities(getcitiesurl);
		httpBackend.flush();
	});
	






	it("should fetch the list of cities", function() {
      var cities = [];
      
      service.getCities(getcitiesurl)
      	.then(function(response){
      		cities = response;
      	})
      	.catch(function(error){
      		console.log('Error: ', error.data);
      	})
          
      
      // sends the data to the promise
      httpBackend.flush();
      
      expect(cities.data).toEqual(citydata);
  	});



});