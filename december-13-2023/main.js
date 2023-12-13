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