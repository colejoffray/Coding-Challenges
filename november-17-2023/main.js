//KATA 1 

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b){
    let result = 0
    if(a < b){
      for(let i = a; i <= b; i++){
        result += i
      }
    }else if(a > b){
        for(let j = a; j >= b; j--){
          result += j 
        }
      }else {
        result = a
      }
    return result
  }

  //test cases
console.log(getSum(0,-1), -1)
console.log(getSum( 321, 123), 44178);
console.log(getSum(2,2), 2)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2 

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
    // Good Luck!
    let peopleOn = 0
    let peopleOff = 0
    for(let i = 0; i < busStops.length; i++){
        peopleOn += busStops[i][0]
        peopleOff += busStops[i][1]
    }
    return peopleOn - peopleOff
  }

//test cases
console.log(number([[10,0],[3,5],[5,8]]),5);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 3 

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"


function divisors(integer) {
  let arr = []
  for(let i = 1; i < integer; i++){
    if(integer % i == 0 && i != 1){
      arr.push(i)
    }
  }
  return arr.length === 0 ? `${integer} is prime` : arr
};

console.log(divisors(13), '13 is prime');
console.log(divisors(24), [2,3,4,6,8,12]);
console.log(divisors(253), [11,23]);
console.log(divisors(29), "29 is prime");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function spinWords(string){
  //TODO Have fun :)
  const result = []
  string.split(' ').forEach(word => {
    if(word.length >= 5){
      let wordBackWords = word.split('').reverse().join('')
      result.push(wordBackWords)
    }else {
      result.push(word)
    }
    
  })
  return result.join(' ')
}

function spinWords(string){
  let newStr = string.split(' ').map(word => {
    if(word.length >= 5) {
     return word.split('').reverse().join('')
  }else {
    return word
  }});
  return newStr.join(' ')
}


console.log(spinWords('Welcome to my home'), 'emocleW to my home');
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw"  );
console.log(spinWords("This sentence is a sentence"), "This ecnetnes is a ecnetnes");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

