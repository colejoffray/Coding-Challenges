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
