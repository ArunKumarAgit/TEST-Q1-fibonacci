//Write a program to find the nth fibonacci number.take a input from the user

var num = prompt("Enter the number");
    num = parseInt(num);

if(isNaN(num)) {
    alert("please enter only numbers");
}
var num1 = 0;
var num2 = 1;
var sum;
if(num == 0) {
    alert("fibbonacci number is " + 0);
} else if(num == 1) {
    alert("fibbonacci number is " + 1);
} else {
    for(i = 2; i <= num; i++){
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    }
 alert("fibbonacci number is " + sum);
}