// Find the needle and return its index 8kyu

function findNeedle(haystack) {
  // your code here
  let needle = ''
  haystack.forEach((e,i) => {
    if(e === 'needle'){
      needle = i
    }
  })
  return `found needle at position ${needle}`
  
//   return `found needle at position ${}`
}

findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'])


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//KATA 2 8kyu
// Check your arrows
// You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
// You need to verify that you have some good ones left, in order to prepare for battle:

// anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])
// If an arrow in the quiver does not have a damaged status, it means it's new.

// The expected result is a boolean, indicating whether you have any good arrows left.

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function anyArrows(arrows){
  // arrow it
  return arrows.some( x => !x.damaged);
}


//test cases 
console.log(anyArrows([]), false, "Should handle empty quiver");
console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
console.log(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//KATA 3 7kyu

// In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
// You will be given three parameters :

// first the first term in the sequence
// c the constant that you are going to ADD ( since it is an arithmetic sequence...)
// l the number of terms that should be returned
// Useful link: Sequence

// Be sure to check out my Arithmetic sequence Kata first ;)
// Don't forget about the indexing pitfall ;)

// ARRAYSFUNDAMENTALS

var seqlist = function(first,c,l){
  // Thou shalt begin !
    let seq = []
    let count = first
    seq.push(count)
    while(seq.length < l){
      count += c
      seq.push(count)
    }
    return seq
  }


  //test cases 
  console.log(seqlist(0,1,20));
  console.log(seqlist(0,4,20));


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //KATA 4 6kyu

  
