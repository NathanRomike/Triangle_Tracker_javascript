describe('isTriangle', function() {
  it('determines if sides can be a triangle', function() {
    expect(isTriangle(3, 3, 4)).to.equal(true)
    expect(isTriangle(3, 3, 4000)).to.equal(false)
  });
});

describe('triangleType', function() {
  it('determines if the triangle is equilateral', function() {
    expect(triangleType(3,3,3)).to.equal('equilateral')
  });

  it('determines if the triangle is isoceles', function() {
    expect(triangleType(3,3,4)).to.equal('isoceles')
  });

  it('determines if the triangle is scalene', function() {
    expect(triangleType(3,4,5)).to.equal('scalene')
  });
});

describe('triangle', function() {
  it('displays an error message if not a triangle', function() {
    expect(triangle(2,3,4000)).to.equal('This is not a triangle.')
  });

  it('returns the triangle type for a valid triangle', function() {
    expect(triangle(2,3,4)).to.equal('scalene')
  });
});
