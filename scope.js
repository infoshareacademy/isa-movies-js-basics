// GLOBAL | name, name2, name3, foo
// ------
// |    | <- foo | name2, bar
// ------
// |    | <- bar | name2 (parameter), name2 (redeclaration var)
// ------
// |    |
// ------

var name = 'Patrycja'
let name2 = 'Mateusz'
const name3 = 'Jan'

const foo = () => {
    const name2 = 'Tadeusz'

    const bar = (name2) => {
        var name2 = 'Amadeusz'

        console.log(name2)
    }

    bar('Odyseusz')
}

foo()