/* ==========
* Exercise 1: Objects
========== */
let obj = {
    name: 'dog',
    legs: 4,
    color: 'white'
};

function animal(obj) {
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs."
}

console.log(animal(obj));

/* ==========
* Exercise 2: Return to sanity
========== */
function mystery() {
    var results = {
        sanity: 'Hello'
    };
    return results;
  }
console.log(mystery());

/* ==========
* Exercise 3: Object syntax debug
========== */
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