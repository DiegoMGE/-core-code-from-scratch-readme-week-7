# Diego Orellana - CoreCode Bootcamp 🚀
## Week 7
## Monday Challenges
- [String: substr()](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#string-substr)
- [String: replace()](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#string-replace)
- [Increment](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#increment)
- [Fahrenheit](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#fahrenheit)
- [Boolean](https://github.com/DiegoMGE/-core-code-from-scratch-readme-week-7/blob/main/README.md#boolean)

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
