/* ==========
* Exercise 1: String: substr()
========== */
function firstWord(string) {
    return string.substr(0, 3);
}

console.log(firstWord('see and stop')); 

/* ==========
* Exercise 2: String: replace()
========== */
function normalize(date) {
    return date.replace(/-/g, '/');
}
console.log(normalize('20-05-2017'));

/* ==========
* Exercise 3: Increment
========== */
let x = 3;
x++;
x = x * 2;
x--;

/* ==========
* Exercise 4: Fahrenheit
========== */
function toFahrenheit(celsius) {
    let fahrenheit = 1.8 * celsius + 32;
    return fahrenheit;
}
console.log(toFahrenheit(0));

/* ==========
* Exercise 5: Boolean
========== */
function nad(a, b) {
    if (a && b === true) {
        return false;
    } else {
        return true;
    }
}
console.log(nad(true, false));
