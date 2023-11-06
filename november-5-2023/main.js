//String ladder 8kyu 7kyu 6kyu 7kyu 8kyu


//KATA 1  8kyu

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
// FUNDAMENTALSSTRINGS

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

console.log(greet('Daniel', 'Daniel'), 'Hello boss');
console.log(greet('Greg', 'Daniel'), 'Hello guest');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 2 7kyu

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// STRINGSFUNDAMENTALS

const solution = (str, ending) => str.endsWith(ending);

//test cases
console.log(solution('samurai', 'ai'), true)
console.log(solution('abcde', 'abc'), false)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//KATA 3 6kyu

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    // TODO
    const length = names.length
    if(!length){
      return 'no one likes this'
    }else if (length === 1){
      return `${names[0]} likes this`
    }else if (length === 2){
      return `${names[0]} and ${names[1]} like this`
    }else if (length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else if (length > 3)  {
      return `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`
    }
  }

//test cases 
console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');