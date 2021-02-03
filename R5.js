// write a function that takes in an object and finds all of the values that are numbers and then converts them to strings. Using recursion

function stringifyNum(obj) {
  let res = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      res[key] = obj[key].toString();
    }
    else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      res[key] = stringifyNum(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNum(obj));

// function that accepts an object and returns all the values in that object that are type of strings

function collectStrings(obj){

    let result = []

    for(let key in obj){
        if(typeof obj[key] === 'string'){
            result.push(obj[key])
        }
        if(typeof obj[key] === 'object'){
            result = result.concat(collectStrings(obj[key]))
        }
    }
    return result

}

let obj2 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj2))// ["foo", "bar", "baz"])