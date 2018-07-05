function makeAdd(a){
    return function(b){
        return a + b
    }
}

const add5 = makeAdd(5)

console.log(
    add5(0)
)

console.log(
    add5(10)
)