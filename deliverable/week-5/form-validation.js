
function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const phoneNumner = document.forms["myForm"]["phone-number"].value;
    const gender = document.forms["myForm"]["gender"].value;
    const dateOfBirth = document.forms["myForm"]["date"].value;
    const comment = document.forms["myForm"]["comment"].value;


    if(name === " " || email === " " || phoneNumner === " " || gender === " " || dateOfBirth === " " || comment === " ") {
        alert("All fields must be filled out");
        return false;
    }
    alert("Form submitted successfully");
    return true;
}
