function hasTargetSum(array, target) {
  // Write your algorithm here
  const viewedNo = {};

  for (const no of array) {
    // n steps
    const complement = target - no;
    if (complement in viewedNo) return true;
    viewedNo[no] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

/* 
  Add your pseudocode here
*/
function findSock(object) {
  if (object.sock) return "sock";
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
// @@ -31,4 +40,4 @@ if (require.main === module) {
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
module.exports = hasTargetSum;