// UNSOLVED
function maxArea(height: number[]): number {
  let mArea = 0;
  // let mid = Math.floor(height.length / 2);
  // let low = mid;
  // let high = low + 1;

  // if (height.length < 2) {
  //   return 0;
  // }
  // if (height.length === 2) {
  //   return Math.min(height[0], height[1]);
  // }

  // while (low >= 0 && high <= height.length - 1) {
  //   let h = Math.min(height[low], height[high]);
  //   const area = h * (high - low);
  //   console.log(area, high, low, h);
  //   if (area > mArea) {
  //     mArea = area;
  //   } else {
  //     if (height[low] < height[high] || high >= height.length - 1) {
  //       if (low === 0 && high < height.length) {
  //         high++;
  //       } else {
  //         low--;
  //       }
  //     } else {
  //       high++;
  //     }
  //   }
  // }
  // return mArea;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let minHeight = Math.min(height[j], height[i]);
      let area = minHeight * (j - i);
      mArea = Math.max(area, mArea);
    }
  }
  return mArea;
}

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));
// console.log(maxArea([1, 2, 1]));
// console.log(maxArea([1, 0, 0, 0, 0, 0, 0, 2, 2]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 25, 7]));
