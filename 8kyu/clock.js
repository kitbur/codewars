// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

function past(h, m, s){
    if ((h <= 23 && h >= 0) && (m <= 59 && m >= 0) && (s <= 59 && s >= 0)) {
        return (h * 3600000) + (m * 60000) + (s * 1000)
    } else {
        return `Invalid`
    }
}