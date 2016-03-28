function Stack () {
  this.data = [];
  // this.length = 0;
}

Stack.prototype.push = function (el) {
  this.data.push(el);
  // this.length++;
}

Stack.prototype.top = function() {
  return this.data[this.data.length-1];
}

Stack.prototype.pop = function() {
  this.data.pop();
  // this.length--;
}

Stack.prototype.isEmpty = function() {
  return (this.data.length === 0);
}

Stack.prototype.size = function() {
  return (this.data.length);
}

module.exports = Stack;
