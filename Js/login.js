//  Step -1 : Add Click Event Handler With The Submit Button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step -2 : Get The Email Address Inside The Email Input Field
    // Always Remember To Use .value To Get Text From Input Field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   
    // Step -3 : To Get Password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // Step- 4 : Verify Email and Password
    if(email == 'sontan@baap.com' && password == 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Here The Login Info --- Email: sontan@baap.com, Password: secret');
    }
})