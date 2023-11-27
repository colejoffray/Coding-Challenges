//KATA 1 

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

function nbDig(n, d) {
    // your code
    let results = []
    let count = 0
    for(let i = 0; i <= n; i++){
        results.push(Math.pow(i,2) + '')
    }
    
    let nums = results.join('').split('')
    nums.forEach(num => {
        if(num === d + ''){
            count ++
        }
    })

    return count
    
}

//test cases 
console.log(nbDig(10, 1), 4);
console.log(nbDig(11011,2), 9481);
console.log(nbDig( 5750, 0),  4700, "n = 5750, d = 0");
console.log(nbDig(12224, 8),  7733, "n = 12224, d = 8");
console.log(nbDig(14550, 7),  8014, "n = 14550, d = 7");
console.log(nbDig( 8304, 7),  3927, "n = 8304, d = 7");