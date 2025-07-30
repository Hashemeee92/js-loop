// weight in kg
// height in meter

let weight = 60;
let height = 1.73;
let bmi =weight/(height)^2;
if(bmi <18.5){
    console.log('You are under weight, BMI : ', bmi);
}
else if(bmi >=18.5 && bmi<=24.9){
    console.log('You are normal, BMI: ', bmi);
}
else if(bmi >=25 && bmi<=29.9){
    console.log('You are over weight, BMI:', bmi)
}
else{
    console.log('You are obese, BMI:', bmi)
}