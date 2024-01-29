// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let vowels = 'aeiou'
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
  }


  console.log(getCount('seven'), 2)




  function digits(n) {
    // TODO
    const str = n + ''
    return str.length
  }


  console.log(digits(25), 2)


//   Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

function removeDuplicateWords (s) {
    // your perfect code...
    const words = s.split(' ')
    const noDuplicate = new Set(words)
    return Array.from(noDuplicate).join(' ')
    
  }


console.log(removeDuplicateWords('alpha gamma gamma gamma beta beta delta'))


// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

function sortGiftCode(code){
    //TODO 
    return code.split('').sort().join('')
  }


  console.log(sortGiftCode('mbmnrenoina'))


//   Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

//   Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
    let count = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] === 'n'){
            count++
        }
    }
    return count <= 15 ? 'Woohoo!' : 'Car Dead'

}


console.log(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!")