function greetingButton(){
    var personName=prompt("What is your name?");
    var personStatus=prompt("How are you doing today?");
    var todaysDate=new Date();
    alert("Today is "+todaysDate.toDateString()+". The time is "+todaysDate.getHours()+":"
    +todaysDate.getMinutes()+"." +"Labyrinthian Mouse Enterprises welcomes you "+personName+"!"
    +"We are glad you are doing "+personStatus+"!");
}
function mathButton(){
    var firstNumber=prompt("Please enter a number");
    var secondNumber=prompt("Please enter a second number");
    var finalSum=firstNumber-secondNumber;
    alert("The difference of those two numbers is "+finalSum);
}
function sentenceButton(){
    alert("We would happily design a website for you");
}
function multiplyButton(){
    var firstNumber=prompt("Enter a number to multipy");
    var secondNumber=prompt("Enter a different number to multipy");
    var finalMultNumber=firstNumber*secondNumber;
    alert("Those two number multiplied together are "+ finalMultNumber);
}
