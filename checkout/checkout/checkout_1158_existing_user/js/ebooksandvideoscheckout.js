/*validation for email*/
function top_email_validate() {
  var top_email = document.getElementById("top_email").value;
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (top_email == "") {
    document.getElementById("label_top_email").innerHTML = "Enter Valid Email";
    document.getElementById("label_top_email").style = "display:block;color:red;";
    return false;
  }
  else if (!top_email.match(reg)) {

    document.getElementById("label_top_email").innerHTML = "Enter Valid Email";
    document.getElementById("label_top_email").style = "display:block;color:red;";
    return false;
  }
  else {
    document.getElementById("label_top_email").style = "display:none;";
    return true;
  }
}
/*validation for card number*/
function cardnumber_validate() {
  if (document.getElementById('creditcardcheck').checked) {
    var cardnumber = document.getElementById("cardnumber").value;
    if (cardnumber == "") {
      document.getElementById("label_cardnumber").innerHTML = "Enter Card Number";
      document.getElementById("label_cardnumber").style =
        "display:block;color:red;";
      return false;
    } else {
      document.getElementById("label_cardnumber").style = "display:none;";
      return true;
    }
  }
}

/*validation for full name*/
function fullname_validate() {
  if (document.getElementById('creditcardcheck').checked) {
    var fullname = document.getElementById("cardName").value;
    var reg = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    if (fullname == "") {
      document.getElementById("label_fullname").innerHTML = "Enter Card Name";
      document.getElementById("label_fullname").style =
        "display:block;color:red;";
      return false;
    } else if (!fullname.match(reg)) {
      document.getElementById("label_fullname").innerHTML =
        "Enter Valid Card Name";
      document.getElementById("label_fullname").style =
        "display:block;color:red;";
      return false;
    } else {
      document.getElementById("label_fullname").style = "display:none;";
      return true;
    }
  }
}

/*validation for date*/
function datecode_validate() {
  if (document.getElementById('creditcardcheck').checked) {
    var expirationdate = document.getElementById("expirationdate").value;
    if (expirationdate == "") {
      document.getElementById("label_date").innerHTML = "Enter Date";
      document.getElementById("label_date").style =
        "display:block;color:red;";
      return false;
    } else {
      document.getElementById("label_date").style = "display:none;";
      return true;
    }
  }
}
/*validation for cvv*/
function cvv_validate() {
  if (document.getElementById('creditcardcheck').checked) {
    var securitycode = document.getElementById("securitycode").value;
    if (securitycode == "") {
      document.getElementById("label_cvv").innerHTML = "Enter CVV";
      document.getElementById("label_cvv").style =
        "display:block;color:red;";
      return false;
    } else {
      document.getElementById("label_cvv").style = "display:none;";
      return true;
    }
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
  if (name == "") {
    document.getElementById("label_city").innerHTML = "Enter City";
    document.getElementById("label_city").style =
      "display:block;color:red;";
    return false;
  } else if (!city.match(reg)) {
    document.getElementById("label_city").innerHTML =
      "Enter Valid City";
    document.getElementById("label_city").style =
      "display:block;color:red;";
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

/*validation for postcode*/
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
function submit_validation_ebooksandvideos() {
  var fullname = document.getElementById("cardName").value;
  var cardnumber = document.getElementById("cardnumber").value;
  var expirationdate = document.getElementById("expirationdate").value;
  var securitycode = document.getElementById("securitycode").value;
  var firstname = document.getElementById("firstName").value;
  var lastname = document.getElementById("lastName").value;
  var address1 = document.getElementById("address1").value;
  var address2 = document.getElementById("address2").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var state = document.getElementById("state").value;
  var postcode = document.getElementById("postCode").value;
  var top_email = document.getElementById("top_email").value;

  if (top_email == "") {
    document.getElementById("label_top_email").innerHTML = "Enter Valid Email";
    document.getElementById("label_top_email").style = "display:block;color:red;";
    return false;
  }

  if (document.getElementById('creditcardcheck').checked) {
    if (cardnumber == "") {
      document.getElementById("label_cardnumber").innerHTML = "Enter Card Number";
      document.getElementById("label_cardnumber").style =
        "display:block;color:red;";
      document.getElementById('cardnumber').focus();
      return false;
    }
  }
  if (document.getElementById('creditcardcheck').checked) {
    if (fullname == "") {
      document.getElementById("label_fullname").innerHTML = "Enter Card Name";
      document.getElementById("label_fullname").style =
        "display:block;color:red;";
      document.getElementById('cardName').focus();
      return false;
    }
  }
  if (document.getElementById('creditcardcheck').checked) {
    if (expirationdate == "") {
      document.getElementById("label_date").innerHTML = "Enter Date";
      document.getElementById("label_date").style =
        "display:block;color:red;";
      document.getElementById('expirationdate').focus();
      return false;
    }
  }
  if (document.getElementById('creditcardcheck').checked) {
    if (securitycode == "") {
      document.getElementById("label_cvv").innerHTML = "Enter CVV";
      document.getElementById("label_cvv").style =
        "display:block;color:red;";
      document.getElementById('securitycode').focus();
      return false;
    }
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
