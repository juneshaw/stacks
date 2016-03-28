function Queue () {
  this.data = [];
}

Queue.prototype.enqueue = function (el) {
  this.data.push(el);
  // this.length++;
}

Queue.prototype.front = function() {
  return this.data[0];
}

Queue.prototype.dequeue = function() {
  return this.data.shift();
}

Queue.prototype.isEmpty = function() {
  return (this.data.length === 0);
}

Queue.prototype.size = function() {
  return (this.data.length);
}

module.exports = Queue;
