// reverse a string recursively

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];

  // let splitStr = str.split("")
  // let reversing = splitStr.reverse()
  // let joinThem = reversing.join("")

  // return joinThem
}
console.log(reverseString("awesome")); // 'emosewa'
console.log(reverseString("rithmschool")); // 'loohcsmhtir'

// palindrom recursively

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  let [firstletter] = str;
  let lastletter = str[str.length - 1];

  if (firstletter === lastletter) {
    let noMatchStr = str.substring(1, str.length - 1);
    return isPalindrome(noMatchStr);
  } else {
    return false;
  }
}
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("panama")); // false
console.log(isPalindrome("dad")); // true

// function odd number

function someRecursive(array,callback){
    if(array.length === 0) return false
    if(callback(array[0])) return true
    return someRecursive(array.slice(1),callback)

}
const isOdd = val => val % 2 !== 0;
console.log(someRecursive([1,2,3,4], isOdd))

// function that accepts an array of arrays and returns a new array with the values in one array

function flatten(array){
    let flatArray = []

    for(let i = 0; i < array.length;i++){
        if(Array.isArray(array[i])){
            flatArray = flatArray.concat(flatten(array[i]))
        }else{
            flatArray.push(array[i])
        }
    }
    return flatArray

}
console.log(flatten([1,2,3,[4,5]]))//[1,2,3,4,5]