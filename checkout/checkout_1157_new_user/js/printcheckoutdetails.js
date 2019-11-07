/*validation for email*/
function email_validate() {
    var email = document.getElementById("email").value;
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
        document.getElementById("label_email").innerHTML = "Enter Email";
        document.getElementById("label_email").style = "display:block;color:red;";
        return false;
    }
    else if (!email.match(reg)) {

        document.getElementById("label_email").innerHTML = "Enter Valid Email";
        document.getElementById("label_email").style = "display:block;color:red;";
        return false;
    }
    else {
        document.getElementById("label_email").style = "display:none;";
        return true;
    }
}

/*validation for first name account*/
function firstName_accnt_validate() {
    var firstName_accnt = document.getElementById("firstName_accnt").value;
    var reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    if (firstName_accnt == "") {
        document.getElementById("label_first_name_accnt").innerHTML = "Enter First Name";
        document.getElementById("label_first_name_accnt").style =
            "display:block;color:red;";
        return false;
    } else if (!firstName_accnt.match(reg)) {
        document.getElementById("label_first_name_accnt").innerHTML =
            "Enter Valid First Name";
        document.getElementById("label_first_name_accnt").style =
            "display:block;color:red;";
        return false;
    } else {
        document.getElementById("label_first_name_accnt").style = "display:none;";
        return true;
    }
}

/*validation for last name account*/
function lastName_accnt_validate() {
    var lastname = document.getElementById("lastName_accnt").value;
    var reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    if (lastname == "") {
        document.getElementById("label_lastName_accnt").innerHTML = "Enter Last Name";
        document.getElementById("label_lastName_accnt").style =
            "display:block;color:red;";
        return false;
    } else if (!lastname.match(reg)) {
        document.getElementById("label_lastName_accnt").innerHTML =
            "Enter Valid Last Name";
        document.getElementById("label_lastName_accnt").style =
            "display:block;color:red;";
        return false;
    } else {
        document.getElementById("label_lastName_accnt").style = "display:none;";
        return true;
    }
}

/*validation for last name account*/
function password_validate() {
    var password = document.getElementById("password").value;
    if (password == "") {
        document.getElementById("label_password").innerHTML = "Enter Password";
        document.getElementById("label_password").style =
            "display:block;color:red;";
        document.getElementById("message").style.display = "none";
        return false;
    } else {
        document.getElementById("label_password").style = "display:none;";
        document.getElementById("message").style.display = "none";
        return true;
    }
}

/*validation for first name*/
function firstname_validate() {
    var firstname = document.getElementById("firstName").value;
    var reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    if (firstname == "") {
        document.getElementById("label_first_name").innerHTML = "Enter First Name";
        document.getElementById("label_first_name").style =
            "display:block;color:red;";
        return false;
    } else if (!firstname.match(reg)) {
        document.getElementById("label_first_name").innerHTML =
            "Enter Valid First Name";
        document.getElementById("label_first_name").style =
            "display:block;color:red;";
        return false;
    } else {
        document.getElementById("label_first_name").style = "display:none;";
        return true;
    }
}

/*validation for last name*/
function lastname_validate() {
    var lastname = document.getElementById("lastName").value;
    var reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    if (lastname == "") {
        document.getElementById("label_last_name").innerHTML = "Enter Last Name";
        document.getElementById("label_last_name").style =
            "display:block;color:red;";
        return false;
    } else if (!lastname.match(reg)) {
        document.getElementById("label_last_name").innerHTML =
            "Enter Valid Last Name";
        document.getElementById("label_last_name").style =
            "display:block;color:red;";
        return false;
    } else {
        document.getElementById("label_last_name").style = "display:none;";
        return true;
    }
}

/*validation for address1*/
function address1_validate() {
    var address1 = document.getElementById("address1").value;
    var reg = /^[0-9a-zA-Z]+$/;
    if (address1 == "") {
        document.getElementById("label_address1").innerHTML = "Enter Address Details";
        document.getElementById("label_address1").style = "display:block;color:red;";
        return false;
    }
    else if (!address1.match(reg)) {
        document.getElementById("label_address1").innerHTML = "Enter Valid Address";
        document.getElementById("label_address1").style = "display:block;color:red;";
        return false;
    }
    else {
        document.getElementById("label_address1").style = "display:none;";
        return true;
    }
}


/*validation for address2*/
function address2_validate() {
    var address2 = document.getElementById("address2").value;
    var reg = /^[0-9a-zA-Z]+$/;
    if (address2 == "") {
        document.getElementById("label_address2").innerHTML = "Enter Address Details";
        document.getElementById("label_address2").style = "display:block;color:red;";
        return false;
    }
    else if (!address2.match(reg)) {
        document.getElementById("label_address2").innerHTML = "Enter Valid Address";
        document.getElementById("label_address2").style = "display:block;color:red;";
        return false;
    }
    else {
        document.getElementById("label_address2").style = "display:none;";
        return true;
    }
}

/*validation for city*/
function city_validate() {
    var city = document.getElementById("city").value;
    var reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    if (city == "") {
        document.getElementById("label_city").innerHTML = "Enter City";
        document.getElementById("label_city").style = "display:block;color:red;";
        return false;
    } else if (!city.match(reg)) {
        document.getElementById("label_city").innerHTML = "Enter Valid City";
        document.getElementById("label_city").style = "display:block;color:red;";
        return false;
    } else {
        document.getElementById("label_city").style = "display:none;";
        return true;
    }
}

/*validation for country*/
function country_validate() {
    var country = document.getElementById("country").value;
    if (country == -1) {
        document.getElementById("label_country").innerHTML = "Select Country Name";
        document.getElementById("label_country").style = "display:block;color:red;";
        return false;
    } else {
        document.getElementById("label_country").style = "display:none;";
        return true;
    }
}

/*validation for state*/
function state_validate() {
    var state = document.getElementById("state").value;
    if (state == -1) {
        document.getElementById("label_state").innerHTML = "Select State Name";
        document.getElementById("label_state").style = "display:block;color:red;";
        return false;
    } else {
        document.getElementById("label_state").style = "display:none;";
        return true;
    }
}

function postcode_validate() {
    var postcode = document.getElementById("postCode").value;
    var reg = /^[0-9]+$/;
    if (postcode == "") {
        document.getElementById("label_postcode").innerHTML = "Enter PostCode";
        document.getElementById("label_postcode").style = "display:block;color:red;";
        return false;
    }
    else if (!postcode.match(reg)) {

        document.getElementById("label_postcode").innerHTML = "Enter Valid Post Code";
        document.getElementById("label_postcode").style = "display:block;color:red;";
        return false;
    }
    else {
        document.getElementById("label_postcode").style = "display:none;";
        return true;
    }
}

/*validation for submit*/
function submit_validation_checkout_print() {
    var email = document.getElementById("email").value;
    var firstName_accnt = document.getElementById("firstName_accnt").value;
    var lastName_accnt = document.getElementById("lastName_accnt").value;
    var password = document.getElementById("password").value;

    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var postcode = document.getElementById("postCode").value;

    if (email == "") {
        document.getElementById("label_email").innerHTML = "Enter Email";
        document.getElementById("label_email").style = "display:block;color:red;";
        document.getElementById('email').focus();
        return false;
    }

    if (firstName_accnt == "") {
        document.getElementById("label_first_name_accnt").innerHTML = "Enter First Name";
        document.getElementById("label_first_name_accnt").style = "display:block;color:red;";
        document.getElementById('firstName_accnt').focus();
        return false;
    }
    if (lastName_accnt == "") {
        document.getElementById("label_lastName_accnt").innerHTML = "Enter Last Name";
        document.getElementById("label_lastName_accnt").style = "display:block;color:red;";
        document.getElementById('lastName_accnt').focus();
        return false;
    }

    if (password == "") {
        document.getElementById("label_password").innerHTML = "Enter Password";
        document.getElementById("label_password").style = "display:block;color:red;";
        document.getElementById("message").style.display = "none";
        document.getElementById('lastName_accnt').focus();
        return false;
    }

    if (firstname == "") {
        document.getElementById("label_first_name").innerHTML = "Enter First Name";
        document.getElementById("label_first_name").style = "display:block;color:red;";
        document.getElementById('firstName').focus();
        return false;
    }
    if (lastname == "") {
        document.getElementById("label_last_name").innerHTML = "Enter Last Name";
        document.getElementById("label_last_name").style = "display:block;color:red;";
        document.getElementById('lastName').focus();
        return false;
    }
    if (address1 == "") {
        document.getElementById("label_address1").innerHTML = "Enter Address";
        document.getElementById("label_address1").style = "display:block;color:red;";
        document.getElementById('address1').focus();
        return false;
    }
    if (address2 == "") {
        document.getElementById("label_address2").innerHTML = "Enter Address";
        document.getElementById("label_address2").style = "display:block;color:red;";
        document.getElementById('address2').focus();
        return false;
    }
    if (city == "") {
        document.getElementById("label_city").innerHTML = "Enter City";
        document.getElementById("label_city").style = "display:block;color:red;";
        document.getElementById('city').focus();
        return false;
    }
    if (country == -1) {
        document.getElementById("label_country").innerHTML = "Enter Country";
        document.getElementById("label_country").style = "display:block;color:red;";
        document.getElementById('country').focus();
        return false;
    }
    if (state == -1) {
        document.getElementById("label_state").innerHTML = "Enter State";
        document.getElementById("label_state").style = "display:block;color:red;";
        document.getElementById('state').focus();
        return false;
    }
    if (postcode == "") {
        document.getElementById("label_postcode").innerHTML = "Enter Postcode";
        document.getElementById("label_postcode").style = "display:block;color:red;";
        document.getElementById('postCode').focus();
        return false;
    }

    alert('IT CHECKS OUT');
    return true;
}
