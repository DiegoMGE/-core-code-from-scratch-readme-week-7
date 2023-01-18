# Diego Orellana - CoreCode Bootcamp 🚀
## Week 7
## Monday Challenges
- [String: substr()](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#string-substr)
- [String: replace()](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#string-replace)
- [Increment](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#increment)
- [Fahrenheit](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#fahrenheit)
- [Boolean](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#boolean)

## Tuesday Challenges
- [Objects](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#objects)
- [Return to sanity](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#return-to-sanity)
- [Object syntax debug](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#object-syntax-debug)

## Wednesday Challenges
- [Count strings in objects](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#count-strings-in-object)
- [Extending JavaScript Objects: Get First & Last Array Element](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#extending-javascript-objects)
- [Object Oriented Piracy](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#object-orientes-piracy)

## Thursday Challenges
- [Convert a String to a Number!](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#convert-a-string-to-a-number)
- [Convert number to reversed array of digits](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#convert-number-to-reversed-array-of-digits)
- [Truthy and Falsy](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#truthy-and-falsy)
- [Training JS #4: basic data types--Array](https://github.com/DiegoMGE/core-code-from-scratch-readme-week-7/blob/main/README.md#training-js-4-basic-data-types--array)

### String: substr()
Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.
```javascript
function firstWord(string) {
    return string.substr(0, 3);
}

console.log(firstWord('see and stop')); // see
```

### String: replace()
Write a function normalize, that replaces '-' with '/' in a date string.
```javascript
function normalize(date) {
    return date.replace(/-/g, '/');
}
console.log(normalize('20-05-2017')); // '20/05/2017'
```

### Increment
Which value does x have after execution of the following code? 
```javascript
let x = 3;
x++;
x = x * 2;
x--; // 7
```

### Fahrenheit
Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.
```javascript
function toFahrenheit(celsius) {
    let fahrenheit = 1.8 * celsius + 32;
    return fahrenheit;
}
console.log(toFahrenheit(0)); // 32
```

### Boolean
Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.
```javascript
function nad(a, b) {
    if (a && b === true) {
        return false;
    } else {
        return true;
    }
}
console.log(nad(true, false));
```

### Objects 
```javascript
let obj = {
    name: 'dog',
    legs: 4,
    color: 'white'
};

function animal(obj) {
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs."
}

console.log(animal(obj)); // This white dog 4 has 4 legs.
```

### Return to Sanity
```javascript
function mystery() {
    var results = {
        sanity: 'Hello'
    };
    return results;
  }
console.log(mystery());
```

### Object Syntax Debug
```javascript
var rooms = {
    first: {
      description: 'This is the first room',
      items: {
        chair: 'The old chair looks comfortable',
        lamp: 'This lamp looks ancient'
    }
},
    second: {
      description: 'This is the second room',
      items: {
        couch: 'This couch looks like it would hurt your back',
        table: 'On the table there is an unopened bottle of water'
      }
    },
}

console.log(rooms);
```

### Count strings in object
```javascript
let obj = {
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2,3,4],
  fifth: null
};

function strCount(obj) {
  let strings = 0;

  for (let i in obj) {
    let value = obj[i];

    if (typeof value === 'string') {
      strings += 1;
    }
    if (typeof value === 'object') {
      strings += strCount(obj[i]);
    }
  }
  return strings;
}

console.log(strCount(obj));
```

### Extending JavaScript Objects
```javascript
var a = [2, 5, 7, 3 ,4];

Array.prototype.first = function() {
  return this[0]
}
Array.prototype.last = function() {
  return this[this.length - 1];
}

console.log(a.first());
console.log(a.last());
```

### Object Orientes Piracy
```javascript
let titanic = new Ship(35, 20);
console.log(titanic.isWorthIt());

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = () => {
      let weightCrew = crew * 1.5;
      let totalWeight = draft - weightCrew;
      console.log('Total ship weight: ', totalWeight);
      
      if (totalWeight > 20) {
        return true;
      } else {
        return false;
      }
    }
  }
```

### Convert a String to a Number!
```javascript
const stringToNumber = function(str){
  return Number(str)
  return null;
}
```

### Convert number to reversed array of digits
```javascript
function digitize(n) {
  let numbers = Array.from(String(n), Number);
  let reverseNumbers = [];
    
  for (let i = numbers.length - 1; i >= 0; i--) {
    reverseNumbers.push(numbers[i]);
    console.log(i);
  }
  return reverseNumbers;
}
```

### Truthy and Falsy
```javascript
const truthy = [true, [], 3, 4, 'test'];
const falsy = ['', undefined, null, false, 0, NaN];
```

### Training JS #4: basic data types--Array
```javascript
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
```
