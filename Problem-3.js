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