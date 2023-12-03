//KATA 1 5kyu

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeros = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
           let num =  arr.splice(i,1) + ''
           zeros.push(+num)
        }
    }
    return arr.concat(zeros)
  }


//test cases
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//KATA 2 5kyu 

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    //Code here
    let punctuation = '!.?'
    let arr = str.split(' ')
    let pig = []
    
    arr.forEach(word => {
        if(word.length == 1 || punctuation.includes(word)){
            pig.push(word)
        }else {
            pig.push(word.slice(1))
        }
        
    })
    
    for(let i = 0; i < pig.length; i++){
            if(!punctuation.includes(pig[i]) && arr[i].length > 1){
                pig[i] +=  arr[i].charAt(0) + 'ay'
            }else if(arr[i].length === 1 && !punctuation.includes(pig[i])){
                pig[i] += 'ay'
            }else {
                pig[i] = pig[i]
            }
    }
    return pig.join(' ')
  }

//test cases
console.log(pigIt('A Pig latin is cool !'),'igPay atinlay siay oolcay !');
console.log(pigIt('Acta est fabula'), 'ctaAay steay abulafay');
console.log(pigIt('Barba non facit philosophum'), 'arbaBay onnay acitfay hilosophumpay');
console.log(pigIt('Cucullus non facit monachum'), 'ucullusCay onnay acitfay onachummay');
