const name="Demon-Bisht"
// const name = new String('Demon Bisht')
const repoCount = 12
console.log(`hello my name is ${name}, my repo count is ${repoCount}`)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.charAt(2)) //to find character at particular index
console.log(name.indexOf('B')) // to find index of a character

const nameSub = name.substring(1,4)  // negative values can't use in substring 
console.log(nameSub) // emo

const anotherString = name.slice(-3,11)
console.log(anotherString)

const newname = "  demon  "
console.log(newname)
console.log(newname.trim())


const url ="https://demon.com/demon%20bisht"
console.log(url.replace('%20','-'))

console.log(url.includes('demon')) // to check if a particular word or character is present in a string
const str1 ="hello how r u"
const words = str1.split(' ')
console.log(words)