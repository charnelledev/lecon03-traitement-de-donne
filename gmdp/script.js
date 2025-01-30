const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbole = '{} [] () "" | \ / ^ !@#$%^&*~.:- -,; <>? ' ;
const rangeValue = document.getElementById('passwordlength');
const passwordOutput = document.getElementById('password-output');
// const generateButon = document.getElementById('generate-buton');
// const lowercaseElement = document.getElementById('lowercase');
// const uppercaseElement = document.getElementById('uppercase');
// const numbersElement = document.getElementById('numbers');
// const symbolsElement = document.getElementById('symbols');
// document.addEventListener('click',(e)=>{
//     console.log(e.target.id);
    
// })

console.log(rangeValue.value);


function generatePassword(){
    let data = [];
    let password = "";
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbole);
    if(data.length === 0){
        alert('veiller selectionner des critere');
        return;
    }

    for(i = 0; i< rangeValue.value; i++){

        // console.log(data[Math.floor(Math.random() *data.length)]);
        password = password + data[Math.floor(Math.random() *data.length)];
        passwordOutput.value = password;
    }
    
    console.log(data);
}

generateButton.addEventListener('click', generatePassword);


// function generatePassword() {
//     let data = [];
//   // if(lowercase.cheched)data.push(dataLowercase)
  
//     if (lowercase.checked) {
  
//       // data.push(dataLowercase)
//         for (let item of dataLowercase) {
//             data.push(item);
//         }
//     }
    
//     if (uppercase.checked) {
//       // data.push(dataUppercase)
  
//         for (let item of dataUppercase) {
//             data.push(item);
//         }
//     }
    
//     if (numbers.checked) {
//         for (let item of dataNumbers) {
//             data.push(item);
//         }
//     }
    
//     if (symbols.checked) {
//         for (let item of dataSymbole) {
//             data.push(item);
//         }
//     }
    
  
  
//     console.log(data);
    
//   }
//   generateButton.addEventListener('click', generatePassword);
  
  
  
  
  // lowercase.checked ? data.push(dataLowercase) : null;
  
  // if(lowercase.checked){
  //  data = data.push(dataUppercase);
  // }else{
  //   data=null;
  // }




















// lowercase.checked? data.push(dataLowercase):null;

// if (lowercase.checked){
//     data = data.push(dataUppercase);
// }else{
//     data = null
// }


