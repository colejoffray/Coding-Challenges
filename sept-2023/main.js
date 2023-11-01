//KATA 1

// This code does not execute properly. Try to figure out why.

// function multiply(a, b){
//     a * b
//   }

//Solution

function multiply(a, b){
    return a * b;
   };

//test case
console.log((multiply(1,1), 1))
console.log((multiply(3,5), 15))

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a - b
}

//test cases 
console.log((add(1,2)),3)
console.log((multiply(1,2)), 2)
console.log((divide(2,1)),2)
console.log(mod(1,2),1)
console.log(exponent(1,2),1)
console.log(subt(1,2),-1)


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 3

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

const arr = [1,3,5,-1]

function positiveSum(arr) {
  total = 0
  for (let i = 0; i < arr.length; i++){
    if(arr[i]>0){
      total += arr[i]
    }
  }
  return total 
}

//test cases
console.log(positiveSum([1,2,3,4,5]),15)
console.log(positiveSum([1,-2,3,4,5]),13)


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 4

// Keep up the hoop

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
    return n >= 10 ?
      "Great, now move on to tricks" :
      "Keep at it until you get it";
  }

//test cases

console.log(hoopCount(6), "Keep at it until you get it")
console.log(hoopCount(10), "Great, now move on to tricks")



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 5

//Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = number => number % 2 === 0 ? 'Even':'Odd'

//test cases 
console.log(evenOrOdd(2), "Even")
console.log(evenOrOdd(7), "Odd")

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 6

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

let nums = ['str', 1, 3, 5, 'purge']
function filter_list(l) {
    let newStr = []
    // Return a new array with the strings filtered out
    for(let i = 0; i < l.length; i++){
      if(l[i] === Number(l[i])){
          newStr.push(l[i])   
      } 
    }
    return newStr 
  }

  //test cases
console.log(filter_list([1,2,'a','b']), [1,2])
console.log(filter_list(['a','b','1']), [])



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 7

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
    let total = 0
    for(let i=0; i<=sheep.length; i++){
      if (sheep[i] === true){
        total += 1
      }else{
        
      }
    }
    return total
    // TODO
  }

  console.log(countSheeps([undefined,null,false,true]), 1)
  console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]), 17)


  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 8

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

let flower1 = 6
let flower2 = 8

function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 > 0){
    return true
  }else if (flower1 % 2 > 0 && flower2 % 2 === 0){
    return true
  }else{
    return false
  }
}

//test cases 
console.log(lovefunc(1,4), true)
console.log(lovefunc(2,2), false)


  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 9

//   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if (num > 0){
      let neg = num - num - num
      return neg 
    }else {
      return num
    }
     // Code?
   }

//test cases 
console.log(makeNegative(42), -42)
console.log(makeNegative(-9), -9)
console.log(makeNegative(0), 0)


  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 10

//   Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    //code here
   return String(n).split('').map(Number).reverse()
  }

//test cases
console.log(digitize(35231),[1,3,2,5,3])
console.log(digitize(0),[0])
console.log(digitize(23582357),[7,5,3,2,8,5,3,2])


  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 11

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let str = '';
    for (let i = 1; i <= n; i++) {
      str += s;
    }
    return str;
  }

//test cases
console.log(repeatStr(3, "*"), "***")
console.log(repeatStr(2, "ha "), "ha ha ")
console.log(repeatStr(7, "aA"), "aAaAaAaAaAaAaA")
