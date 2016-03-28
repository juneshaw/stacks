var Stack = require('./Stack');
var Queue = require('./Queue');


var numbers = new Stack();
numbers.push(10);
numbers.push(11);
numbers.push(13);
console.log(numbers);
console.log('Top: ', numbers.top());
console.log('Pop: ', numbers.pop());
console.log('numbers after pop: ', numbers);

var members = new Queue();
members.enqueue('June');
members.enqueue('Maria');
members.enqueue('Aubrey');
members.enqueue('Taylor');
console.log('members: ', members);
console.log('Enqueue:', members.enqueue('Rachel'));
console.log('Front: ', members.front());
console.log('Dequeue:', members.dequeue());
console.log('Members: ', members);
