// for(i = 0; i < 150; i++){
//     console.log(i);
//     if(i >= 5){
//         break
//     }
// }

// let n = 54;
// while(n > 25){
//     if(n < 50){
//         break;
//     }
//     console.log(n);
//     n--;
// }

// for (i = 1; i < 10; i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(i);
// }

let n = 0;
while (n < 50){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}