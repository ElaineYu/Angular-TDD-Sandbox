// Create module
var pigLatinServiceModule = angular.module('pigLatinServiceModule', []);

// Declare dependencies for module
pigLatinServiceModule.service('pigLatinServices', function() {

  var pigLatinize = function(string) {

    var parameterString = string;
    console.log(string);

    var pigLatinizedString = parameterString.substring(1) + parameterString.substring(0,1) + "ay";
    console.log(pigLatinizedString);

    return pigLatinizedString;
  }
   return pigLatinize;
});
