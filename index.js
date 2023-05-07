function hasTargetSum(array, target) {
  // create an object to keep track of numbers that we have already seen
  const seenNumbers = {};
  //iterate thru each number in the array
  for (i = 0; i < array.length; i++) {
    //identify the complement
    const complement = target - array[i];
    //check if any key on our object is the complement
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  runtime: O(n)

*/

/* 
  Add your pseudocode here
  create an object to keep track of numbers that we have already seen
  iterate thru each number in the array
    for the current num, identify a complement
    check if any key on our object is the complement
      if so, return true,
      else, add that number to the object 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
