//Basic  Recursion examples

function countDown(num){

    if(num <= 0){
        console.log(`All done`)
        return
    }
    console.log(num)
    num--
    countDown(num)
}

console.log(countDown(100))


// sum range

function sumRange(num){
    if(num === 1){
        console.log(num)
        return 1
    }
    console.log(num)
    return num + sumRange(num - 1)
}

console.log(sumRange(4))


// factorial

function factorial(num){
    if(num === 1 ){
        console.log(num)
        return 1
    }
    console.log(num)
    return num * factorial(num - 1)
}
console.log(factorial(5))

// Recursion helper method

function collectEvenNumber(arrayOfNums){

    let result = []

    function helper(input){
        if(input.length === 0){
            return 
        }
        if(input[0] % 2 === 0){
            result.push(input[0])
        }
        helper(input.slice(1))
    }
    helper(arrayOfNums)

    return result
}
console.log(collectEvenNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

// approach two
// Pure Recursion


function collectOddNumber(arrayNum){

    let newArray=[]

    if(arrayNum.length === 0){
        return newArray
    }

    if(arrayNum[0] % 2 !== 0){
        newArray.push(arrayNum[0])
    }

    newArray = newArray.concat(collectOddNumber(arrayNum.slice(1)))

    return newArray
}
console.log(collectOddNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))
