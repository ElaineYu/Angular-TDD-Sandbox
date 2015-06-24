// generic javascript convention: declares local scope only
'use strict';

var mockPigLatinInstance;
beforeEach(module('pigLatinServices'));

// beforeEach(function() {
//   mockPigLatind = {alert: jasmine.createSpy()};

//   module(function($provide) {
//     $provide.value('$window', mock);
//   });

//   inject(function($injector) {
//     notify = $injector.get('notify');
//   });
// });

it("should expect a string parameter and return a string", function() {
  // expect(bar).toEqual(123);
  expect(string).toBeString();

});