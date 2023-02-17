/* ==========
* Exercise 1: Count strings in objects
========== */
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

/* ==========
* Exercise 2: Extending JavaScript Objects: Get First & Last Array Element
========== */
var a = [2, 5, 7, 3 ,4];

Array.prototype.first = function() {
  return this[0]
}
Array.prototype.last = function() {
  return this[this.length - 1];
}

console.log(a.first());
console.log(a.last());

/* ==========
* Exercise 3: Object Oriented Piracy
========== */
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
