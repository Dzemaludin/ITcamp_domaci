// 1 ZADATAK  fizzBuzz   



// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }



array1 = [];

while(true){
    number = prompt("Unesi element");
    if(number % 3 === 0 && number % 5 === 0){
        number = number + " - FizzBuzz";
        array1.push(number);
        break;
    }else if(number % 3 == 0){
        number = number + " - Fizz";
        array1.push(number);
    }
    else if(number % 5 == 0){
        number = number + " - Buzz";
        array1.push(number);
    }else{
        array1.push(number);
    }
}

for(i = 0; i < array1.length; i++){
    console.log(array1[i]);
}