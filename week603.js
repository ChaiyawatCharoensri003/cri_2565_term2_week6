const mark = 80;
let grade;
if (mark>=80 && mark<=100){
    meesage = `Grade A is ${mark}`;
}else if(mark>=70 && mark<80){
    meesage = `Grade B is ${mark}`;
}else if(mark>=60 && mark<70){
    meesage = `Grade C is ${mark}`;
}else if(mark>=50 && mark<60){
    meesage = `Grade F is ${mark}`;
}else{
    meesage = `Grade ERROR is ${mark}`;
}
console.log(meesage)