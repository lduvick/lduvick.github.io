function getShape(){
    var userInput="y";
    while(userInput=="y"){
        userInput=prompt("Dormouse asks: 'Do you wish to determine what a shape is?' (Y/N)");
        userInput.toLowerCase();//converting the input to determine if the loop will continue
        if(userInput=="n"){
            break;
        }
        var shapeChosen;
        var numSides=prompt("Dormouse asks: 'What is the number of sides that this shape has?'");
        while(valdiateEntry(numSides)){
            numSides=prompt("Dormouse asks: 'That is not a valid input <br>Please enter the number of sides that this shape has?'");
        }
        Math.abs(numSides);//taking the absolute value of the number input.
        Math.round(numSides);//rounding the number to the nearest integer
        if(numSides==0){
            shapeChosen="not a shape";
        }else if(numSides==1){
            shapeChosen="monogon";
        }else if(numSides==2){
            shapeChosen="digon";
        }else if(numSides==3){
            shapeChosen ="triangle";
        }else if(numSides==4){
            shapeChosen="square";
        }else if(numSides==5){
            shapeChosen="pentagon";
        }else if(numSides==6){
            shapeChosen="hexagon";
        }else if(numSides==7){
            shapeChosen="heptagon";
        }else if(numSides==8){
            shapeChosen="octagon";
        }else if(numSides==9){
            shapeChosen="nonagon";
        }else if(numSides==10){
            shapeChosen="decagon";
        }else if(numSides>10){
            shapeChosen="please input a smaller number of sides";
        }
    alert("The Dormouse says the shape is "+shapeChosen);
    }
}
function valdiateEntry(numSides){
    var invalidInput;
    if(Number.isInteger(numSides)){
        if(0<=numSides<=10){//if the number of sides is greater than 0 and less than ten then it is a valid number
            invalidInput=false;
            return invalidInput;
        }else{
            invalidInput=true;
            return invalidInput;
        }
    }
}