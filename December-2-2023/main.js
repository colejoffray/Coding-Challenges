//KATA 1 

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let result = []

    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0 || i === 0){
            if(i === str.length - 1){
                result.push(str[i] + '_')
            }else {
                result.push(str.slice(i, i+2))
            }
            
        }
        
    }
    return result
}


//test cases 
console.log(solution('abcde'), ['ab', 'cd']);
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);