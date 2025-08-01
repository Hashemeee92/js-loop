// Letter grade and marks
//A: 90-100
//B:80-89
// C: 70-79
//D: 60-69
//F: 0-59
let marks = 56;
if(marks>=90 && marks<=100){
console.log('Grade is A:', marks);
}
else if(marks>=80 && marks<=89){
    console.log('Grade is B:', marks);
}
else  if(marks>=70 && marks<=79){
    console.log('Grade is C :', marks)
}
else if(marks>=60 && marks<=69){
    console.log('Your Grade is: D and marks is:', marks)
}
else {
    console.log('Your are failed');
}