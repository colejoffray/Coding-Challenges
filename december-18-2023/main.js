// A checksum is an algorithm that scans a packet of data and returns a single number. The idea is that if the packet is changed, the checksum will also change, so checksums are often used for detecting transmission errors, validating document contents, and in many other situations where it is necessary to detect undesirable changes in data.

// For this problem, you will implement a checksum algorithm called Quicksum. A Quicksum packet allows only uppercase letters and spaces. It always begins and ends with an uppercase letter.

// Otherwise, spaces and uppercase letters can occur in any combination, including consecutive spaces.

// A Quicksum is the sum of the products of each character’s position in the packet times the character’s value. A space has a value of zero, while letters have a value equal to their position in the alphabet.

// So, A = 1, B = 2, etc., through Z = 26. Here are example Quicksum calculations for the packets "ACM" and "A C M":

// ACM
// 1 × 1 + 2 × 3 + 3 × 13 = 46 

// A C M
// 1 x 1 + 3 x 3 + 5 * 13 = 75
// When the packet doesn't have only uppercase letters and spaces or just spaces the result to quicksum have to be zero (0).

// AbqTH #5 = 0

function quicksum(packet){
    // Code time :)
    let sum = 0
    const pattern = /[^a-zA-Z\s]/
    let int = packet.split('').find(e => +e || pattern.test(e))
    console.log(int);
    if(packet.toUpperCase() !== packet || int){
        return 0
    }else {
        for(let i = 0; i < packet.length; i++){
            if(packet[i] != ' '){
              let position = parseInt(packet[i],36) - 9
              sum += position * (i + 1)
            }
            
          }
          return sum
    }
        
    }
    


console.log(quicksum("ACM"), 46);
// console.log(quicksum("234 234 WEF ASDF AAA 554211 ???? "));
console.log(quicksum("MID CENTRAL"), 650);
console.log(quicksum("???"), 0);


///////////////////

// nough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// // With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
    // ...
    const numberMap = new Map()
    let result = []
    arr.forEach(number => {
            if(numberMap.has(number)){
                numberMap.set(number, numberMap.get(number) + 1)
            }else {
                numberMap.set(number, 1);
              }

            if(numberMap.get(number) <= n){
                result.push(number)
            }else {
                return
            }
            
        
    })
    return result
  }

  //test cases
  console.log(deleteNth([20,37,20,21], 1), [20,37,21]);
  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]);
  console.log(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],3), [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]);