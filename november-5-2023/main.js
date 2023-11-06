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