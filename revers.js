const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(numbers);

// numbers.reverse();

// console.log(numbers);

// const rev_numbers = [98,];
// for(const num of numbers){
//     // console.log(num);
//     rev_numbers.unshift(num);
// }
// console.log(rev_numbers);

// const reversed_numbers = [];
// for(let i = 0; i < numbers.length; i++){
//     const num = numbers[i];
//     reversed_numbers.unshift(num);
// }
// console.log(reversed_numbers);

const rev_rev_numbers = [];
for(let i = numbers.length -1; i >=0; i--){
    const num = numbers[i];
    console.log(num);
    rev_rev_numbers.push(num);
}
console.log(rev_rev_numbers);