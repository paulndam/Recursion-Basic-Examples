//  funtion that accepts a base and an exponent. The function should return the power of the base to the exponent


function power(expo,base){
    if(expo === 0){
        return 1
    }
    console.log(`------<> Expo --> ${expo}------<>`)
    console.log(`------** Base --> ${base}------****`)
    return base * power(expo - 1,base)

}
console.log(power(2,0))//0 or 1
console.log(power(2,2))//4
console.log(power(2,4))//16



function factorial(num){
    if(num === 1){
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(7))
console.log(factorial(4))

// function that takes an array of numbers and returns the product of the number

function product(arrayNum){

    if(arrayNum.length === 0){
        return 1
    }

    return arrayNum[0] * product(arrayNum.slice(1))

    
}
console.log(product([1,2,3]))//6
console.log(product([1,2,3,10]))//6

// function  that accepts a number and adds up all the numbers from 0 to the number passed to the function


function recursiveRange(number){
    if(number === 0){
        return 0
    }
    return number + recursiveRange(number - 1)
}
console.log(recursiveRange(6))//21
console.log(recursiveRange(10))//55

// function that accepts a number and returns the nth number in the fibonacci seqeunce

function fib(num){
    if(num <= 2){
        return 1
    }
    console.log(`-----> num --> ${num}`)
    return  fib(num - 1) + fib(num -2)
                //4-1=3  +     3-2=1
                //3      +      1 = 4

}
console.log(fib(4))//3

