// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function reverseString(string) {

    let str = ''
    
    for (i = string.length - 1; i >=0; i--) {
        str += string[i];
    }

    return str

}
