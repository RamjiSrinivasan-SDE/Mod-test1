function submitfunction(){
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let email=document.getElementById('email').value;
    let reason=document.getElementById('reason').value;

    console.log(firstname,lastname,email,reason);

     if(firstname != null&& lastname != null && email != null && reason != null)
     {
        alert("Form Submitted Successfully");
    }else{
        alert("All fields are required");
    }
}

