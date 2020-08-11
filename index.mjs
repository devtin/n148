import JSD from 'js-dir-into-json'

const config = await JSD.jsDirIntoJson('./config')

console.log(config.methods.sum(1, 2)) // => 3
console.log(config.methods.multiply(3, 3)) // => 9
console.log(config.userInfo.name) // => Martin
console.log(config.userInfo.address.city) // => Miami
console.log(config.userInfo.address.zip) // => 305