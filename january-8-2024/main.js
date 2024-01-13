// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string ){
    let result = []
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase()){
            result.push(` ${string[i]}`)
        }else {
            result.push(string[i])
        }
    }
    return result.join('')
}

console.log(solution('camelCaseExample'), 'camel Case Example')

////////////////////////////////////

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str){
    if(str.length > 140 || !str){
        return false
    }
    const string = str.trim().split('')
    let res = []
    string.forEach((el,i,a) => {
        let letter = el
        if(el !== ' '){
            if(i === 0){
                letter = `#${el.toUpperCase()}`
                res.push(letter)
            }else if( a[i-1] === ' ') {
                res.push(letter.toUpperCase())
            }else{
                res.push(letter)
            }
        }
    })
    return res.join('')

}


console.log(generateHashtag("Codewars" ))
