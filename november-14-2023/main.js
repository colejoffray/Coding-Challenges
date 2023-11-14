//KATA 1 6kyu


// Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

// For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

// The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

// Examples
// Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
// [1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
// Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
// [1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
// Multiples of 2 are replaced by Fizz and Buzz:
// [1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
// Fizz = 1, Buzz = 6:
// ["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]

function reverseFizzBuzz(array) {
    // your code
    const fizz = array.indexOf(array.find((x) => x === 'Fizz')) + 1;
    const buzz = array.indexOf(array.find((x) => x === 'Buzz')) + 1;
    const fizzBuzz = array.indexOf(array.find(x => x === 'FizzBuzz')) + 1;
    if(fizz === 0 && buzz === 0) {
        return [fizzBuzz, fizzBuzz]
    }else if (!buzz){
        return [fizz, fizzBuzz]
    }else if (!fizz){
        return [fizzBuzz, buzz]
    }
    else {
        return [fizz, buzz]
    }  
  };

//test cases
console.log(reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]), [1,6]);
console.log(reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]), [3,5]);
console.log(reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]), [2,3]);
console.log(reverseFizzBuzz([1,"FizzBuzz",3,"FizzBuzz",5,"FizzBuzz"]), [2,2]);
console.log(reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]), [1,6]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2  6kyu

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

function solution(number){
    const arr = [] //where we'll store all multiples
    for(let i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            arr.push(i)
        }
    }
    return arr.reduce((acc,c) => acc + c, 0)
  }

//test cases
console.log(solution(10), 23);
console.log(solution(6), 8);
console.log(solution(4), 3);
console.log(solution(-1), 0);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 3 6kyu

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    //happy coding!
    const aSorted = A.sort()
    const res = aSorted.find((e,_,a) => (a.lastIndexOf(e) - a.indexOf(e)  + 1) % 2 != 0)
    return !res ? 0 : res
  }


  //test cases
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);
console.log(findOdd([0,1,0,1,0]) , 0);
console.log(findOdd([1,1,2]), 2);
console.log(findOdd([0]) , 0);


////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 4 6kyu

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n){
    let numToString = String(n)
    while (numToString.length > 1){
        let reduceNum = numToString.split('').map(x => +x).reduce((acc,c) => acc + c, 0)
        numToString = String(reduceNum)
    }
    return +numToString
}

//test cases 
console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);

