// const nums = [13,2,3,4,52,6,7,8,9,10]

// const numSum = nums.reduce((accum,curr)=>accum+curr,0)
// console.log(numSum) //55

// const numSum = nums.reduce((accum,curr)=>{
//     console.log(`accumulator ${accum} current ${curr}`)
//     return accum+curr
// },0);

// console.log(numSum) //55

const shopingCart = [
    {
        itemnName: 'JS course',
        price: 2999
    },
    {
        itemnName: 'Python course',
        price: 3999
    },
    {
        itemnName: 'mobile  dev course',
        price: 1999
    },
    {
        itemnName: 'data science course',
        price: 12999
    },
]

// total price
const total = shopingCart.reduce((accum,curr)=>accum+curr.price,0);
console.log(total);