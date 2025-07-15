// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(arr) {
    return arr.length > 0 ? arr.reduce((acc, sum) => acc + sum) / arr.length : 0
}