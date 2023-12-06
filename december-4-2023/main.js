//KATA 1 

// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    // build here
    let tower = []
    let a = '*'
    for(let i = 1; i <= nFloors; i++){
        if(i === 1){
            tower.push(a)
        }else{
           a += a
           tower.push(a + '*') 
        } 
         
    }
    return tower
  }



//test cases 
console.log(towerBuilder(4), [" * ","***"]);