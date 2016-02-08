var triangle = function(s1, s2, s3) {
  if (isTriangle(s1, s2, s3)) {
    return triangleType(s1, s2, s3);
  } else {
    return 'This is not a triangle.';
  }
};

var triangleType = function(s1, s2, s3) {
    if (s1===s2 && s2===s3) {
      return 'equilateral';
    } else if (s1===s2 || s1===s3 || s3===s2) {
      return 'isoceles';
    } else {
      return 'scalene';
    }
};

var isTriangle = function(s1, s2, s3) {
  return s1 <= (s2 + s3) && s2 <= (s1 + s3) && s3 <= (s1 + s2)
};

$(document).ready(function() {
  $('form#triangle').submit(function(event) {
    var s1 = parseInt($('input#s1').val());
    var s2 = parseInt($('input#s2').val());
    var s3 = parseInt($('input#s3').val());
    var result = triangle(s1, s2, s3);

    $('#result').append(result);
    event.preventDefault();
  });
});
