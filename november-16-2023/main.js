//KATA 1 Highest Scoring Word 6kyu

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    const wordValues = []
    

    x.split(' ').forEach(word => {
        let letters = word.split('')
        let arr = []
        for(let i = 0; i < letters.length; i++){
            arr.push(parseInt(letters[i], 36) - 9)
        }
        wordValues.push(arr.reduce((acc,c) => acc + c, 0))
   })
    
   const index = wordValues.indexOf(Math.max(...wordValues))
   return x.split(' ')[index]
    
}

//test cases
console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('massage yes massage yes massage'), 'massage');
console.log(high('take two bintang and a dance please'), 'bintang');


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//KATA 2 Mexican Wave 6kyu

// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

// Kata Series
// If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

function wave(str){
    // Code here
    let result = []
    if(!str){
        return result
    }else {
        for(let i = 0; i < str.length; i++){
            let letters = str.split('')
            if(letters[i] != ' '){
                letters[i] = letters[i].toUpperCase()
                result.push(letters.join(''))
            }
            
        }
    }
    return result
  }

  //test cases
console.log(wave('two words'), ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']);
console.log(wave('hello'), ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
