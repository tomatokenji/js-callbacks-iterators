var people = ['Bob', 'Jen', 'James', 'Isolde'];

// Your code here!

// Write some code using map that takes the above array of objects, and turns the array elements to all caps

// ex:
// console.log(people);
// > [ 'BOB', 'JEN', 'JAMES', 'ISOLDE' ]

var upperCasePeople = people.map(function(person){
  return person.toUpperCase();
})

console.log(upperCasePeople);
