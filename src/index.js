/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
/*An integer k on nth place means, that nth Spichonee loves kth Spichonee.
                                  // 1  2  3  Spichonees
  let count = getLoveTrianglesCount([2, 3, 1]);
  console.log(count); // 1
  /**
    1st Spichonee loves 2nd Spichonee.
    2nd Spichonee loves 3rd Spichonee.
    3rd Spichonee love 1st Spichonee.
    There is love triangle.
  */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    first = preferences[i];
    second = preferences[first - 1];
    third = preferences[second - 1];

    if (third === i + 1 && first != i + 1) {
      count++;
      // console.log("i=", i, "f=", first, "pos", i, "s=", second, "pos", first-1, "t=", third, "pos", second-1, "count=", count);

      delete preferences[i];
      delete preferences[first - 1];
      delete preferences[second - 1];
    }

  }
  return count;
};