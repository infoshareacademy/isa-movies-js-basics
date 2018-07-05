const numbers = [10, 20, 30, 40, 50, 60]

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

const sumUp = (nums) => {
    let sum = 0

    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i]
    }

    return sum
}

console.log(
    sumUp([1, 5, 27, 3])
)

const sumUpArguments = function () {
    let sum = 0

    for(let i = 0; i < arguments.length; i++){
        sum = sum + arguments[i]
    }

    return sum
}

console.log(
    sumUpArguments(1, 5, 27, 3)
)