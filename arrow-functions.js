function add(a, b){
    return a + b
}

const addArrow = (a, b) => {
    return a + b
}

console.log(
    addArrow(6,9)
)

const addArrow2 = (a, b) => a + b

console.log(
    addArrow2(6,9)
)

const hello = name => 'Hello ' + name + '!'

console.log(
    hello('Mateusz')
)

const return5 = () => 5

console.log(
    return5()
)

const returnObject = () => ({
    name: 'Mateusz',
    lastname: 'Choma'
})

console.log(
    returnObject()
)