// generic javascript convention: declares local scope only
'use strict';

describe("Pig Latin Servicing", function() {
  //  keep in local scope by adding var Blah
  var pigLatinize;

  // require the pigLatinServiceModule from piglatin_servie.js
  beforeEach(module('pigLatinServiceModule'));

  beforeEach(function() {
    // Injector dependency --> Creates pigLatinize for you
    inject(function($injector) {
      pigLatinize = $injector.get('pigLatinServices');
    });
  });

  it("should expect a string parameter and not a number", function() {
    var pigLatinizeResult = pigLatinize(1);
    expect(pigLatinizeResult).toBeFalse();
  });

  it("should expect a word beginning with a constant to return string with the first constant added to the end of string plus ay at the end", function() {
    var pigLatinizeResult = pigLatinize("pig");
    expect(pigLatinizeResult).toEqual("igpay");
  });

  it("should expect a word beginning with a vowel to return the same string with the word yay at the end", function() {
    var pigLatinizeResult = pigLatinize("eat");
    expect(pigLatinizeResult).toEqual("eatyay");
  });

});