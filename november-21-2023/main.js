//KATA 1 7kyu

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
    const stray = numbers.filter((x,_,a) => a.indexOf(x) === a.lastIndexOf(x))

    return +stray.join('')
    
  }


  console.log(stray([1, 1, 2]), 2)
  console.log(stray([8, 1, 1, 1, 1, 1, 1]), 8);
  console.log(stray([-21, -21, -21, -21, -6, -21, -21]), -6);
  console.log(stray([0, 0, 0, 7, 0, 0, 0]), 7);


  ////////////////////////////////////////////////////////////////////

  //KATA 2 7kyu

//   Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


  function getDivisorsCnt(n){
    // todo
    let count = 0

    for(let i = 0; i <= n; i++){
        if(n % i === 0){
            count ++
        }
    }

    return count 
}


//test cases 
console.log(getDivisorsCnt(4), 3);
console.log(getDivisorsCnt(1),  1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);