// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    //TODO
    let newStrc = ''
}


console.log(toWeirdCase('hello'))






// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
};


console.log(isAnagram('toffee', 'foefet'))


// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
    //your code here
    return this.split(' ').map((word) => {
        return word.split('').map((letter, index) => {
            if(index === 0){
                return letter.toUpperCase()
            } 
            return letter
        }).join('')
    }).join('')
  }

let str = 'camel case'
console.log(str.camelCase())