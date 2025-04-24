function validate(e) {
    e.preventDefault();
    const name=document.getElementById('name').value ;
    const email=document.getElementById('email').value ;
    const pass=document.getElementById('password').value ;
    const age=document.getElementById('age').value ;
    const address=document.getElementById('address').value ;
    const standard=document.getElementById('class').value ;
    const institute=document.getElementById('institute').value ;
    const phone=document.getElementById('phone').value ;
    const msgBox=document.getElementById('message') ;
    let message='' ;
    if (name===''){
        message='Enter your full name.'
        msgBox.style.color='red'
    }
    else if (email===''){
        message='Enter an Email id.';
        msgBox.style.color='red';
    }
    else if (pass===''){
        message='Enter a valid password.';
        msgBox.style.color='red';
    }
    else if (age===''){
        message='Enter your current age.';
        msgBox.style.color='red';
    }
    else if (address===''){
        message='Enter your present address.';
        msgBox.style.color='red';
    }
    else if (standard===''){
        message='Enter your class.';
        msgBox.style.color='red';
    }
    else if (institute===''){
        message='Enter your institute name.';
        msgBox.style.color='red';
    }
    else if (phone===''){
        message='Enter a valid Phone no.';
        msgBox.style.color='red';
    }
    else {
        message='Login successful.'
        msgBox.style.color='green'
    }
    msgBox.innerText=message;
}
