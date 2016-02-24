describe('Suite of tests for testing url Constant: ',function(){

	beforeEach(module('travelApp'));
	var url;
	beforeEach(inject(function (_url_) {
  		url = _url_;
	}));

	it('should have a url constant object: ', function() {
		expect(url).toBeDefined();
	});
	it('should have correct url constant values: ', function() {

		expect(url.getflighturl).toBe('/getFlight');
		expect(url.addflighturl).toBe('/addFlights');
		expect(url.getcitiesurl).toBe('/getCities');
		expect(url.addcitiesurl).toBe('/addCities');

	});


});