function Airport() {
  this.planes = [];
  this.defaultCapacity = 20;
};

Airport.prototype.dock = function(plane) {
  if (this.planes.length > this.defaultCapacity) {
    throw new Error('Airport is full');
  }
  this.planes.push(plane);
};

Airport.prototype.release = function(plane) {
  if (this.planes.length == 0) {
    throw new Error('Airport is empty');
  }
  var index = this.planes.indexOf(plane)
  var plane_taken_off = this.planes.splice(index, 1)
};
