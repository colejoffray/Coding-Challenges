// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


// Example:

// [10,10,10,18,20,20] --> 12

function passed (list) { 
    const passedTests = list.filter(x => x<= 18)
    if(passedTests.length === 0) {
      return 'No pass scores registered.'
    }else{
      return Math.round(passedTests.reduce((acc,c) => acc + c, 0) / passedTests.length)
    }    
 } 

 //test cases 
console.log(passed([10,10,10,18,20,20]),12);
console.log(passed([21,22,24]),'No pass scores registered.');
console.log(passed([3,22,9,13,20,18,2,14,20,8,23,12,7,21,21,19,20,11,18,7,13,22,11,20,9]), 10);
console.log(passed([5,11,21,16,20,24,19,28,18,15,10,12,16,17,21,25,24,12,21,18,17]),14);
