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