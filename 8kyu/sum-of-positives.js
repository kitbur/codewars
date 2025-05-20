// Task

// You get an array of numbers, return the sum of all of the positives ones.
// Example

//     [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

// Note

// If there is nothing to sum, the sum is default to 0.

function positiveSum(array) {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i]
        }
    }
    return sum
}