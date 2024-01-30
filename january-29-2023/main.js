// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
  const arr = s.split('')
  return [arr.map((e,i) => {
    if(i % 2 === 0) {
        return e.toUpperCase()
    }
    return e
  }).join(''), arr.map((e,i) => {
    if(i % 2 != 0 ){
        return e.toUpperCase()
    }
    return e
  }).join('')]
};


console.log(capitalize('abcdef'))


// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


function encrypt(text, n) {
    for(let i = 0; i < n; i++){
        even = text.split('').filter((e,i) => i % 2 === 0)
        odd = text.split('').filter((e,i) => i % 2 !== 0)
        const encryptedCode = odd.concat(even).join('')
        text = encryptedCode
    }
    return text
  }
  
  function decrypt(encryptedText, n) {
    if(!encryptedText || n <= 0){
        return encryptedText
    }
    const originalLength = encryptedText.length
    for(let i = 0; i < n; i++){
        const midPoint = Math.floor(originalLength / 2)
        const even = encryptedText.slice(midPoint)
        const odd = encryptedText.slice(0,midPoint)
        encryptedText = Array.from({length: originalLength}, (_,index) => (index % 2 === 0 ? even : odd)[Math.floor(index / 2)]).join('')
    }
    return encryptedText
  }


  console.log(encrypt('This is a test!', 1))
  console.log(decrypt("hsi  etTi sats!", 1), "This is a test!")
  console.log(decrypt("s eT ashi tist!", 2), "This is a test!")