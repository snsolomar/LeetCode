//create a program simulating the fibonacci sequence
var fib = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1){
        return 1;
    }
    return fib(n-1)+fib(n-2)
};

//create a program that calculates the factorial of a number 
var factorial = function(n) {
    return (n <= 1) ? 1 : factorial(n-1) * n;
}

//create a program that uses recursion to find the length of a string (hint: use .slice)
var findLength = function(str) {
    if (str.length === 0) {
        return 0;
    }
    return 1 + findLength(str.slice(1))
}
// console.log(findLength('strin'));

//create a program that uses recursion to calculate the sum of all elements in an array

const sum = function(arr) {
    
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1))
}
// let arr1 = [1,2,3];
// console.log(sum(arr1))

//create a program that uses recursion tofind the maximum element in an array

var maxArr = function(arr) {

    if (arr.length === 0){
        return 0;
    }
    return Math.max(arr[0], maxArr(arr.slice(1)))
}

console.log(maxArr([2,13,9,5,7]));

//create a program that uses recursion to check if a number is prime

var prime = function(arr) {

}



