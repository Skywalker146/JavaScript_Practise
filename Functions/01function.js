function isEvenOrOdd(num){
    if(num%2== 0){
        return "even";
    }else{
        return "odd";
    }
    // return num%2== 0 ? "even" : "odd";  
}

for(leti=1; i<=20; i++){
    console.log(i + " is " + isEvenOrOdd(i));
}
// console.log(isEvenOrOdd(10)); // even