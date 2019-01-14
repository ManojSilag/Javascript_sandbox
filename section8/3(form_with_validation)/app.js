//Form blur Event Listners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validateName(e){
   const name = e.target.value;
   const re = /^[a-z]{2,10}$/i;
   if(!re.test(name)){
       e.target.classList.add('is-invalid');
   }else{
       e.target.classList.remove('is-invalid')
   }
}
function validateZip(e){
    const zip = e.target.value;
    const re = /^[0-9]{6}$/; // => For India
    //const re = /^[0-9]{5}(-[0-9]{4})?$/ // => For US
    if(!re.test(zip)){
        e.target.classList.add('is-invalid');
    }else{
        e.target.classList.remove('is-invalid')
    }
}
function validateEmail(e){
    const email = e.target.value;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email)){
        e.target.classList.add('is-invalid');
    }else{
        e.target.classList.remove('is-invalid')
    }
}
function validatePhone(e){
    const phone = e.target.value;
    const re = /^(\d){10}$/;
    //const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; => For US
    if(!re.test(phone)){
        e.target.classList.add('is-invalid');
    }else{
        e.target.classList.remove('is-invalid')
    }
}