describe("Airport", function() {

  beforeEach(function() {
    airport = new Airport;
    plane = new Plane;
  })

  it("can dock a plane", function() {
    airport.dock(plane)
    expect(airport.planes.length).toEqual(1);
  });

  it("can release a plane", function() {
    airport.dock(plane);
    airport.release(plane);
    expect(airport.planes.length).toEqual(0);
  });

  it("cannot dock planes more than its default capacity", function() {
    for(var i = 0; i <= airport.defaultCapacity; i++) {
      airport.dock(plane);
    }
    expect(function(){ airport.dock(plane) }).toThrowError('Airport is full');
  });

  it("cannot release a plane when it's empty", function() {
    expect(function(){ airport.release(plane) }).toThrowError('Airport is empty');
  });
});
