function add(a, b){
    console.log('jestem w funkcji')
    return a + b
    console.log('ja też jestem w funkcji')
}

console.log(
    add(1, 2)
)

const isGreaterThen10 = function(x){
    if(x > 10){
        return 'jest większe!'
    }else{
        return 'nie jest większe!'
    }
}

console.log(
    isGreaterThen10(5)
)

const isGreaterThen10Prim = function(x){
    if(x > 10){
        return {
            message: 'jest większe!',
            number: x
        }
    }else{
        return {
            message: 'nie jest większe!',
            number: x
        }
    }
}

console.log(
    isGreaterThen10Prim(5)
)

const test = function test2(){
    return 'TEST!'
}

console.log(
    test()
)

const withoutReturn = function(){
    return
}

console.log(
    withoutReturn()
)

const resultOfAdd = add(3, 7) // 10
const resultOfAdd2 = add(1, 19) // 20
const result = resultOfAdd + resultOfAdd2 // 30