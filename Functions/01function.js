function isEvenOrOdd(num){
    if(num%2== 0){
        return "even";
    }else{
        return "odd";
    }
    // return num%2== 0 ? "even" : "odd";  
}

for(let i=1; i<=20; i++){
    console.log(i + " is " + isEvenOrOdd(i));
}
// console.log(isEvenOrOdd(10)); // even

// Q) why do we doing return

// console.log has a functionaly of displayingg the output on the console but return is used to return the value from the function.

function welcome(name){
    console.log("hello",name,"Welcome to JS");
    return"byeHave a nice day!";
}

let result =welcome("John");
console.log(result); // undefined