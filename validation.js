const number = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('value is a number');
    
}
else{
    console.log('value is not a number');
    
}

const numbers = [3, 12, 78, 90];
const student = {name: 'Rongila Rafsan', job: 'Khawadawa kora'}
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(number));
// console.log(typeof student);
console.log(isNaN(student));
console.log(isNaN(number));
console.log(isNaN(numbers));
