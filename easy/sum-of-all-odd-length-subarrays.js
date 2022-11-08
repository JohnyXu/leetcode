/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  // Stores the sum
  var sum = 0;

  // Size of array
  var l = arr.length;

  // Traverse the array
  for (var i = 0; i < l; i++) {
    // Generate all subarray of odd length
    for (var j = i; j < l; j += 2) {
      for (var k = i; k <= j; k++) {
        // Add the element to sum
        sum += arr[k];
      }
    }
  }

  // Return the final sum
  return sum;
};
