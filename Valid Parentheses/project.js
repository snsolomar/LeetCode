function isValidParanthesis(string) {
  //edge case
  if (string.length <= 1) {
    return false;
  }
  //create stack to store data structure
  const stack = [];

  //iterate through string
  for (let i = 0; i < string.length; i++) {
    console.log(stack);
    //create var for "top", which we will use to compare indexes
    const top = stack[stack.length - 1];
    //if index is a paranthesis then it will push to stack,
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      stack.push(string[i]);

      //remove top if previous index is the same as current index
    } else if (string[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop(string[i]);

      //remove top if previous index is the same as current index
    } else if (string[i] === "]" && top === "[" && stack.length !== 0) {
      stack.pop(string[i]);

      //remove top if previous index is the same as current index
    } else if (string[i] === "}" && top === "{" && stack.length !== 0) {
      stack.pop(string[i]);
    } else {
      //returns false if any string index does not close the previous index
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidParanthesis("(){}"));
