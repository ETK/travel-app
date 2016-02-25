describe('Testing HomeController: ',function(){
var rootScope, scope;

beforeEach(module('travelApp'));

beforeEach(inject(function ($rootScope) {
  rootScope = $rootScope;
  scope = $rootScope.$new();
}));

beforeEach(inject(function ($controller) {
  $controller('HomeController', {
    vm: scope
  });
}));




});