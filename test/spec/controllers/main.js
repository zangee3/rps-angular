'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('rockPaperScissorAngularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of gameChoices to the scope', function () {
    expect(scope.gameChoices.length).toBe(3);
  });

  it("should return true when given a valid choice", function() {
    expect(scope.validateChoice('Paper')).toBe(true);
  });

  it("should return false when given an invalid choice", function() {
    expect(scope.validateChoice('Rope')).toBe(false);
  });

  it("should return result as 'Paper' when given 'Paper' and 'Rock' as choices ", function() {
    var result = scope.getResults('Paper', 'Rock');
    expect(result).toEqual('Paper');
  });

  it("should return result as 'Rock' when given 'Scissors' and 'Rock' as choices ", function() {
    var result = scope.getResults('Scissors', 'Rock');
    expect(result).toEqual('Rock');
  });

  it("should return result as 'Scissors' when given 'Paper' and 'Scissors' as choices ", function() {
    var result = scope.getResults('Paper', 'Scissors');
    expect(result).toEqual('Scissors');
  });

  it("should return result as 'it is a tie' when given 'Paper' and 'Paper' as choices ", function() {
    var result = scope.getResults('Paper', 'Paper');
    expect(result).toEqual('it is a tie');
  });

  it("should return result as 'it is a tie' when given 'Rock' and 'Rock' as choices ", function() {
    var result = scope.getResults('Rock', 'Rock');
    expect(result).toEqual('it is a tie');
  });

  it("should return result as 'it is a tie' when given 'Scissors' and 'Scissors' as choices ", function() {
    var result = scope.getResults('Scissors', 'Scissors');
    expect(result).toEqual('it is a tie');
  });
});
