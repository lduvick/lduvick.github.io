var personName=[];
var personSalary=[];
var select = document.getElementById("peopleArr"); 
var employeeNames = ["Jim Neidhart","Paul Walker","Malsa Caldwell","Trada Paasad"]; 

for(var i = 0; i < employeeNames.length; i++){
    var nameArr = employeeNames[i];
    var newElement = document.createElement("OPTION");
    newElement.textContent = nameArr;
    newElement.value = nameArr;
    select.appendChild(element);
}

window.onload = function(){//when the function loads 
    document.getElementById("empName").focus();    
}

function addSalary(){
    console.log("Add Salary Button works");
    var salInput=document.getElementById("salText").value;
    var nameInput=document.getElementById("empName").value;
    if(salInput==""||salInput==NaN||nameInput=="Select an Employee"||nameInput==""){
        alert("Invalid Input, please try again.");
        document.getElementById("empNames").focus();
    }else{
        salaryEntry = parseInt(salInput);
        personSalary.push(salInput);
        personName.push(nameInput);
        document.getElementById("salText").innerHTML = "";
        document.getElementById("empName").focus();
    }
}
function displayResults(){
    console.log("Display Results Button works");
    var i=0;
    var j=0;
    var result=0;
    var highSal=0;

    //text box to input the salary value populate the arrays with the name and salary
    while(i<personSalary.length){
        if(highSal<personSalary[i]){
            highSal=personSalary[i];
        }
        i++;
    }
    for(j=0;j<personSalary.length;j++){
        result += personSalary[j];
    }
    let avgResult= (result / personSalary.length);
    document.getElementById("results").innerHTML = "<h2> Results are as follows <h2>" + "<p> Highest Overall Salary: " + highSal+ "</p>"+"<p> Average Salary: " + avgResult;
}
function displaySalary(){
    console.log("Display Salary Button works");
    var disSalary= "<tr><th> Employee Name </th> <th> Employee Salary </th></tr>";
    var i=0;
    while(i<personName.length){
        disSalary +="<tr><td>" + personName[i]+ "</td><td>"+ personSalary[i]+"</td></tr>";
        i++;
    }
    disSalary+= "</table>";
    document.getElementById("results_table").innerHTML = "<h2> Employee Salary</h2>" + disSalary;   
}