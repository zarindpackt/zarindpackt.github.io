function top_emailfunc() {
    document.getElementById('top_email').removeAttribute('disabled');
}
function top_addressfunc() {
    document.getElementById('top_address').removeAttribute('disabled')
}

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

/*validation for ship to */
function top_shipto_validate() {
    var top_address = document.getElementById("top_address").value;
    var reg = /^[0-9a-zA-Z]+$/;;

    if (top_address == "") {
        document.getElementById("label_top_shipto").innerHTML = "Enter Valid Address";
        document.getElementById("label_top_shipto").style = "display:block;color:red;";
        return false;
    }
    else if (!top_address.match(reg)) {

        document.getElementById("label_top_shipto").innerHTML = "Enter Valid Address";
        document.getElementById("label_top_shipto").style = "display:block;color:red;";
        return false;
    }
    else {
        document.getElementById("label_top_shipto").style = "display:none;";
        return true;
    }
}

function submit_validation_shipping_print() {
    var top_email = document.getElementById("top_email").value;
    var top_address = document.getElementById("top_address").value;

    if (top_email == "") {
        document.getElementById("label_top_email").innerHTML = "Enter Valid Email";
        document.getElementById("label_top_email").style = "display:block;color:red;";
        return false;
    }

    if (top_address == "") {
        document.getElementById("label_top_shipto").innerHTML = "Enter Valid Address";
        document.getElementById("label_top_shipto").style = "display:block;color:red;";
        return false;
    }



}