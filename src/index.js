const promise = new Promise((resolve, reject) => {
  if (resolve) {
    resolve('Stuff worked')
  } else {
    reject(Error('It broke'))
  }
})

promise.then((result) => {
  console.log(result)
}, (err) => {
  console.log(err)
})

const promise1 = new Promise((resolve, reject) => {
  resolve(1)
})

promise1.then((val) => {
  console.log(val) // 1
  return val + 2
}).then((val) => {
  console.log(val) // 3
})

const wait =
  (time) =>
    new Promise(
      (resolve) =>
        setTimeout(resolve, time)
    )

const pa = wait(3000)
const pa1 = wait(5000)

// pa.then(() => {
//   console.log('Yo this waited 3 seconds to print!')
// })

const pb =
  pa
    .then(() => {
      console.log('3 seconds have passed')
      return 200
    })

// pb.then((val) => {
//   console.log(val)
// })

const pc =
  pa1.then(() => {
    console.log('5 seconds have passed as expected')
    return 50
  })

// pc.then((val) => {
//   console.log(val)
// })

const pbc = Promise.all([pb, pc])

const pd = pbc.then(([b, c]) => b + c)
const pe = pbc.then(([b, c]) => b * c)

pd.then(n => console.log(n))
pe.then(n => console.log(n))


const p1 = Promise.resolve(3)
const p2 = 1337
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo')
})

Promise.all([p1, p2, p3]).then(values => {
  console.log(values)
})

console.log('Hey that\'s pretty good.')
