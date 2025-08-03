/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

if (area > 0 && area <= 1000000000){
    area = area / 2;
    console.log(area);
}




/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money >= 25000){
    console.log("Laptop");
}
else if(money >= 10000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}




/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here

if(lastDay > 3 && lastDay <=30){
    for( i = 1; i <= lastDay; i++){
        if(i % 3 === 0){
            console.log(i +' - '+'medicine')
        }
        else{
            console.log(i +' - '+'rest')
        }
     
    }
}




/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if(fileName.startsWith('#')){
    console.log('Store');
}
else if(fileName.endsWith('.pdf') || fileName.endsWith('.docx')){
    console.log('Store');
}
else{
    console.log('Delete');
}




/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhanku" , roll: 1014 ,department: "cse" };
//write your code here

var email = student.name + student.roll  + '.' + student.department + '@ph.ac.bd';
console.log(email);




/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

if(startingSalary > 0 && startingSalary <= 1000000000){
    if(experience > 0 && experience <= 50){
        salaryGrowth = Math.pow(1.05, experience);
        currentSalary = startingSalary * salaryGrowth;
        console.log(currentSalary.toFixed(2));
    }
}