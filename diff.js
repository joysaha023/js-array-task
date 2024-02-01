// for(i = 0; i <=20; i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }

//give me the number 1 to 30 divisible by 5
// for(i = 1; i <= 30; i++){
//     if(i%5 === 0){
//         // console.log(i);
//     }
// }
// for(i = 1; i <= 30; i++){
//     if(i%3 === 0 || i%5 ===0){
//         console.log(i);
//     }
// }

let total = 0;
for(i=1; i<=20; i++){
    if(i%3 === 0){
        console.log(i);
        total = total + i;
        console.log('total', total);
    }
}

console.log('sum of the number of: ', total);