// Create module
var pigLatinServiceModule = angular.module('pigLatinServiceModule', []);

// Declare dependencies for module
// For Unknown Provider errors, look for spelling errors..

// service starts new Something
// factory doesn't do new
pigLatinServiceModule.service('pigLatinServices', function() {

  // Test for vowel
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
  };

  var pigLatinize = function(argument) {

    var pigLatinArgument = argument;
    console.log(argument);
    console.log("Initial argument = " + argument);

    var wordBeginsWithVowel = isVowel(pigLatinArgument[0]);
    console.log("Word begins with vowel = " + wordBeginsWithVowel);

    // If argument is a number
    if (typeof pigLatinArgument == "number") {
      return false;

    // If string starts with a vowel
    } else if (wordBeginsWithVowel == true) {
      var pigLatinizedString = pigLatinArgument + "yay";
      console.log(pigLatinizedString);

    // If string starts with a constant
    } else if (wordBeginsWithVowel == false) {
      var pigLatinizedString = pigLatinArgument.substring(1) + pigLatinArgument.substring(0,1) + "ay";
      console.log(pigLatinizedString);

    } else {
    // Something else
      return "I don't know";
    }
    return pigLatinizedString;
  }
   return pigLatinize;
});
