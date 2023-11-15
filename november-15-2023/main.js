//KATA 1 6kyu

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


const  countBits = function(n) {
    // Program Me
    const binary = n.toString(2).split('')
    const howMany1s = binary.filter(x => x === '1').length
    return howMany1s
  };

//test cases
// console.log(countBits(0), 0)
// console.log(countBits(4), 1);
// console.log(countBits(7), 3);
// console.log(countBits(392902058), 17);
// console.log(countBits(183337941), 16);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2 6kyu

function findOutlier(integers){
    //your code here
    const evens = integers.filter(x => x % 2 === 0)
    const odds = integers.filter(x => x % 2)
    return evens.length > odds.length ? odds[0] : evens[0]
  }

  //test cases
  console.log(findOutlier([2,6,8,10,3]), 3);
  console.log(findOutlier([0,0,3,0,0]), 3);
  console.log(findOutlier([1,1,0,1,1]), 0);
  console.log(findOutlier([0, 1, 2]), 1);