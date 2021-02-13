const form=document.getElementById("form");
const username=document.getElementById('userName');

const email=document.getElementById("Email");
const password=document.getElementById('password')
const password2=document.getElementById("password2") 
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log(username.value);
//     if(username.value===""){
//         showError(username,"required");
//     }
    
    
//     else
//     {
//         showSuccess(username);
//     }
//      if(email.value===""){
//         showError(email," email required");
//     }else if(!isEmailValid(email.value)){
//         showError(email,"invalid email");
//     }
    
//     else
//     {
//         showSuccess(username);
//     }
//     if(password.value===""){
//         showError(password," password required");
//     }else
//     {
//         showSuccess(password);
//     }
//     if(password2.value===""){
//         showError(password2," password2 required");
//     }else
//     {
//         showSuccess(password2);
//     }
// })











form.addEventListener("submit",function(e){

    e.preventDefault();
    checkRegestration([username,email,password,password2]);
   
    checkLength(username,5,25);
    checkLength(password,5,25);
    isEmailValid(email);
    checkPassword(password,password2);
  


})

//function
function checkRegestration(inputInfo){


    inputInfo.forEach(function(input) {
        if(input.value.trim() ===''){
            showError(input,`${input.id} is required`)
        }else
        {
            showSuccess(input);
        }

        
    });
}
//check email
function isEmailValid(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else {
        showError(input,"is not valid");
    }
   // return re.test(String(email).toLowerCase());
}
//show success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//show error

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;


}
 // check length of userName and password
 function checkLength(input,min,max){
     if(input.value.length<min){
         showError(input,`${input.id} is require at least ${min} character`);

     }else if(input.value.length>max){
          showError(input,`${input.id} is require less than ${max} character`);

     }else {
         showSuccess(input);
     }
 }

 //check password;
 function checkPassword(input1,input2){
     if(input1.value!==input2.value){
         showError(input2,"password not match");
     }else{
         showSuccess(input1,input2);
     }
 }

