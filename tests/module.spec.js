describe('Router Testing: ',function(){
	var $rootScope, $state, $injector, state = 'home';
	beforeEach(module('travelApp'));

	beforeEach(inject(function(_$rootScope_, _$state_, _$injector_, $templateCache){
		$rootScope = _$rootScope_;
		$state = _$state_;
		$injector = _$injector_;

		$templateCache.put('./views/home.html','');
	}));
	



	it('should transition to home state', inject(function($rootScope, $state){
		$state.go(state);
		$rootScope.$digest();
		expect($state.current.name).toBe(state);
	}));

	

});