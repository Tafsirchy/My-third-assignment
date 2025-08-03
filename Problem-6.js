/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

if (experience > 0) {
  console.log("Your salary is " + startingSalary);
} else if (experience >= 1 && experience < 5) {
  console.log("Your salary is " + (startingSalary + 5000));
}