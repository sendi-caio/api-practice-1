const posts = [
  {
    name: 'bayu',
    age: 26,
  },
  {
    name: 'fakhry',
    age: 27,
  },
]

const mappedPost = posts.map((value, index) => (`${value.name} ${value.age}`))
console.log(mappedPost)
