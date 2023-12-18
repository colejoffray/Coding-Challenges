//kata 1 
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    // TODO
    let count = {}
    for(let i = 0; i < string.length; i++){
        count[string[i]] ? count[string[i]]++ : count[string[i]] = 1;
    }
    return count
  }

  console.log(count('ab'), {'a': 1, 'b': 1});




//   Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

  function humanReadable(seconds) { 
	let time = {}; 
	time.seconds = !Number.isInteger((Math.floor(seconds) % 60) / 10) ? Math.floor(seconds) % 60 : `0${Math.floor(seconds) % 60}`
	time.minutes = !Number.isInteger((Math.floor(seconds / 60) % 60 / 10)) ? Math.floor(seconds / 60) % 60 :  `0${Math.floor(seconds / 60) % 60}`
	time.hours = !Number.isInteger(Math.floor(seconds / 3600) / 10) ?  Math.floor(seconds / 3600) : `0${Math.floor(seconds / 3600)}`
	return  `${time.hours}:${time.minutes}:${time.seconds}` 
} 

console.log(humanReadable(60), '00:00:59');