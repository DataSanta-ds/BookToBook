//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

$('#form-signin').submit(function(e){
    e.preventDefault();
});

function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle();// display:block or none
    $('#logreg-forms .form-reset').toggle(); // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
});

//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
function login() {
    var username = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    var data = {
        'user_mail': username,
        'password': password
    };
    $.post(ip + "api/user/login", data).done(
        function(response){
            // do something when response is ok
            console.log("Il login e' andato a buon fine")
            console.log(response);
            window.location.href = ip + "index.html";
        }
    ).fail(
        function(jqXHR, textStatus, errorThrown) {
            console.log('Login failed!')
            console.log(jqXHR)
            if(jqXHR.status == 404){
                displayWarning("Invalid Username or Password, did you remember to register?")
            }

        }
    );
}



function register() {
    var user_mail = $('#user-email').val();
    var password = $('#user-pass').val();
    var username = $('#user-name').val();
    var user_shipping_address = $('#inputAddress').val();

    var data = {
        'user_mail': user_mail,
        'password': password,
        'username': username,
        'user_shipping_address': user_shipping_address
    };
    $.post(ip + "api/user", data).done(
        function(response){
            // do something when response is ok
            window.location.href = ip + "index.html";
            console.log("Il login e' andato a buon fine")
            console.log(response);
        }
    ).fail(
        function(jqXHR, textStatus, errorThrown) {
            console.log('Login failed!')
        }
    );
}


var displayWarning = function(message){
    $("#warning-col").html("");
    var $alert = $("<div class='alert alert-warning alert-dismissible show' />");
    var $message = $("<span />");
    $message.html(message);
    var $button = $("<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>");
    $("#warning-col").append($alert);
    $alert.append($message);
    $alert.append($button);
};





