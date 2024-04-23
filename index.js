const oranges = ['orange', 'orange','orange']
const apples = ['apple','apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

console.countReset('orange')

oranges.forEach(fruit => {
  console.count(fruit)
})
