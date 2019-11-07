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

/*validation for submit*/
function submit_validation_checkout_ebooksandvideos() {
  var firstName_accnt = document.getElementById("firstName_accnt").value;
  var lastName_accnt = document.getElementById("lastName_accnt").value;
  var password = document.getElementById("password").value;
  var top_email = document.getElementById("top_email").value;

  if (top_email == "") {
    document.getElementById("label_top_email").innerHTML = "Enter Valid Email";
    document.getElementById("label_top_email").style = "display:block;color:red;";
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

  alert('IT CHECKS OUT');
  return true;
}
