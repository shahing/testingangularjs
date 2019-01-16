describe('Testing Angular JS Test Suite', function() {
  describe('Testing Angular JS Controller', function () {

    it('should initialize the title in the scope', function() {
      module('testingAngularApp');
      var scope = {};
      var ctrl;

      inject(function($controller) {
        ctrl = $controller('testingAngularCtrl', {$scope:scope});
      });

      expect(scope.title).toBeDefined();
      expect(scope.title).toBe("testingangularjs");
    });
  });
});
