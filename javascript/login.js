function validateForm(){

    const em = validateEmail();
    const pw = validatePassword();

    if(!(em && pw)){
        document.querySelector('#errormsg').style.color = 'red';
        document.querySelector('#errormsg').innerHTML = "Invalid email or password!";
        
    }
    else{
        document.querySelector('#email').value = "";
        document.querySelector('#password').value = "";
        document.querySelector('#errormsg').innerHTML = "";
        alert("Welcome back!");
    }
   

return true;
}

    

function validateEmail(){
    const email = document.querySelector('#email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(email)){
        return false
    }
    return true;
}


function validatePassword(){

    var password = document.querySelector('#password').value;
    var pwregex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(pwregex.test(password)){
                return true;
            }
        return false;
    
    }