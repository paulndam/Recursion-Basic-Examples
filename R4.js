// Given an array of strings, make the first letter of each string a capital.

function capitalizeFirstLetter(arrayString) {
  if (arrayString.length === 1) {
    return [arrayString[0].charAt(0).toUpperCase() + arrayString[0].slice(1)];
  }

  let result = capitalizeFirstLetter(arrayString.slice(0, -1));
  result.push(arrayString.slice(arrayString.length - 1)[0].toUpperCase());

  return result;
}

console.log(capitalizeFirstLetter(["car", "taco", "boy"]));

function capi(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capi("car"));

function cap(str) {
  // if(str.length === 1){
  //     return str[0].toUpperCase()
  // }

  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (str.length === 1) {
      //console.log(str[i])
      return [str[i].charAt(0).toUpperCase() + str[i].slice(1)];
    }
    res = cap(str.slice(0, -1));
    res.push(
      str
        .slice(str.length - 1)[0]
        .charAt(0)
        .toUpperCase()
    );
    //console.log(`----> ${i}`)
  }
  return res;
}
console.log(cap(["car", "mom", "bend", "try"])); // Car, Mom, Bend, Try

// write a recursive function that returns the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  var sum = 0;

  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }

    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

// given an array of strings return a new array with each words capitalized

function capitalizeWord(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (str.length === 1) {
      return [str[i].toUpperCase()];
    }

    res = capitalizeWord(str.slice(0, -1));
    res.push(str.slice(str.length - 1)[0].toUpperCase());
  }
  return res
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWord(words))

// write a function that takes in an object and finds all of the values that are numbers and then converts them to strings. Using recursion
