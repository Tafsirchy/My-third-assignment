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