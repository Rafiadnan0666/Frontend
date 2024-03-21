const numbers = [3,-5,8,1,2,9,7,-1,6]
 
// const filterNumber = numbers.filter((number) => number > 3)
// console.log(filterNumber);

// const mapNumber = numbers.map((number) => number / 2 )
// console.log(mapNumber);

const reduceNumber = numbers.reduce((hasil, num) => hasil - num ,0)
console.log(reduceNumber);