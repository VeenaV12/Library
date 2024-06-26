function validateForm(){

    // store the return value after execution of each function 
    const fn = validateFirstName();
    const ln = validateLastName();
    const em = validateEmail();
    const ph = validatePhoneNumber();
    const pw = checkPasswordStrength();
 

    // clear the error msg on correct input
    if(fn){
        document.querySelector('#errorfname').innerHTML = "";
    }
    if(ln){
        document.querySelector('#errorlname').innerHTML = "";
    }
    if(em){
        document.querySelector('#errormail').innerHTML = "";
    }
    if(ph){
        document.querySelector('#errorph').innerHTML = "";
    }
    if(pw){
        document.querySelector('#errorpw').innerHTML = "";
        document.querySelector('#password').style.border ="";
    }
    

    // submit the form only after validating each field
    if(ph && pw && em && fn && ln){
        document.querySelector('#firstname').value = "";
        document.querySelector('#lastname').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#phonenumber').value = "";
        document.querySelector('#password').value = "";
        document.querySelector('#errorpw').style.color = '';

        alert("Your submission was successful!")
    }

    return true;
}


function validateFirstName(){
    const firstName = document.querySelector('#firstname').value;
    const fnRegex =  /^[A-Za-z]+$/;
    if(!fnRegex.test(firstName)){
        document.querySelector('#errorfname').innerHTML = "Enter a valid name!";
        return false;
    }
    return true;
}


function validateLastName(){
    const lastName = document.querySelector('#lastname').value;
    const lnRegex =  /^[A-Za-z]+$/;
    if(!lnRegex.test(lastName)){
        document.querySelector('#errorlname').innerHTML = "Enter a valid name!";
        return false;
    }
    return true;
}



function validateEmail(){
    const email = document.querySelector('#email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(email)){
        document.querySelector('#errormail').innerHTML = "Enter a valid email!";
        return false
    }
    return true;
}



function validatePhoneNumber(){
    const phoneNumber = document.querySelector('#phonenumber').value;
    const pnRegex = /^\d{10}|(?:\d{3}[-. ]){2}\d{4}$/;
    if(!pnRegex.test(phoneNumber)){
        document.querySelector('#errorph').innerHTML = "Enter a valid phone number!";
        return false;
    }
    return true;
}




function checkPasswordStrength(){

var password = document.querySelector('#password').value;
var pwregex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(pwregex.test(password)){
            
        if (password.length > 13){
                
            document.querySelector('#password').style.border = '2px solid green';
            document.querySelector('#errorpw').style.color = 'green';
            document.querySelector('#errorpw').innerHTML = "Strong";
            return true;
        }
        else if(password.length > 10 && password.length < 13){
                //document.querySelector('#errorpw').innerHTML = 'Hello';
            document.querySelector('#password').style.border = '2px solid orange';
            document.querySelector('#errorpw').style.color = 'orange';
            document.querySelector('#errorpw').innerHTML = "Medium";
            return true;
            }
        else{
                document.querySelector('#password').style.border = '2px solid red';
                document.querySelector('#errorpw').style.color = 'red';
                document.querySelector('#errorpw').innerHTML = "Poor";
                return true;
            }
        }
    else{
        //document.querySelector('#password').style.border = '2px solid red'; 
        document.querySelector('#errorpw').innerHTML = 'Your password must contain minimum 8 characters,at least one uppercase, one lower case, and one number.';
        return false;
    }


}

// reset form on cancel button
function clearForm(){

        document.querySelector('#errorfname').innerHTML = "";
        document.querySelector('#errorlname').innerHTML = "";
        document.querySelector('#errormail').innerHTML = "";
        document.querySelector('#errorph').innerHTML = "";
        document.querySelector('#errorpw').innerHTML = "";
        document.querySelector('#password').style.border ="";
    
}