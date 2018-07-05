const name = 'Mateusz'

localStorage.setItem('name', name)

console.log(
    localStorage.getItem('name')
)

localStorage.removeItem('name')

localStorage.setItem('name1', 'Ala')
localStorage.setItem('name2', 'Ela')
localStorage.setItem('name3', 'Marcelina')

localStorage.clear()

const obj = { name: 'Mateusz' }

localStorage.setItem('obj', JSON.stringify(obj))

console.log(
    JSON.parse(
        localStorage.getItem('obj')
    )
)