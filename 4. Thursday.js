/* ==========
* Exercise 1: Convert a String to a Number!
========== */
const stringToNumber = function(str){
    return Number(str)
    return null;
  }

/* ==========
* Exercise 2: Convert number to reversed array of digits
========== */
function digitize(n) {
    let numbers = Array.from(String(n), Number);
    let reverseNumbers = [];
      
    for (let i = numbers.length - 1; i >= 0; i--) {
      reverseNumbers.push(numbers[i]);
      console.log(i);
    }
    return reverseNumbers;
  }

/* ==========
* Exercise 3: Truthy and Falsy
========== */
const truthy = [true, [], 3, 4, 'test'];
const falsy = ['', undefined, null, false, 0, NaN];

/* ==========
* Exercise 4: Truthy and Falsy
========== */
function getLength(arr){
    //return length of arr
    return arr.length;
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length - 1];
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el);
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr
  }
