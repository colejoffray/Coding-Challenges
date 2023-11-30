//KATA 1 6kyu

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p){
    let e = n + ''
    let arr = []
    for(let i = 0; i < e.length; i++){
        arr.push(Math.pow(+e.charAt(i), p))
        p++
    }
    let result =  arr.reduce((acc,c) => acc + c, 0) / n
    return Number.isInteger(result) ? result : -1
  }


  //test cases 
  console.log(digPow(89, 1), 1);
  console.log(digPow(92, 1), -1);
  console.log(digPow(542186, 2), 1);
  console.log(digPow(2646798, 1), 1);
  console.log(digPow(46288, 3), 51);


  ////////// ////////// ////////// ////////// ////////// ////////// ////////// ////////// ////////// ////////// //////////


  //KATA 2 6kyu 

//   A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//   Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let res = [...new Set(string.toLowerCase())]
    let onlyAlphabet = res.filter(letter => alphabet.includes(letter))
    return onlyAlphabet.length === 26
  }


//test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
console.log(isPangram("Cwm fjord bank glyphs vext quiz"), true);
console.log(isPangram("This isn't a pangram!"), false);
console.log(isPangram("Detect Pangram"), false);
  
  