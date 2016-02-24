describe('Router Testing: ',function(){
	var $rootScope, $state, $injector;

	beforeEach(module('travelApp'));

	beforeEach(inject(function(_$rootScope_, _$state_, _$injector_, $templateCache){
		$rootScope = _$rootScope_;
		$state = _$state_;
		$injector = _$injector_;
		$templateCache.put('./views/home.html','');
		$templateCache.put('./views/results.html','');
	}));
	



	it('should transition to home state', inject(function($rootScope, $state){
		$state.go('home');
		$rootScope.$digest();
		expect($state.current.name).toBe('home');
		expect($state.current.templateUrl).toEqual('./views/home.html');
	}));

	it('should transition to results state', inject(function($rootScope, $state){
		$rootScope.$digest();
		$state.transitionTo('results');
		$rootScope.$digest();
		expect($state.current.name).toBe('results');
		expect($state.current.templateUrl).toEqual('./views/results.html');
	}));

	

});