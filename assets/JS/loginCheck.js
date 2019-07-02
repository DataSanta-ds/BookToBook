//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

$(document).ready(function () {

    checkCookie().then(user => {
        if (user === false) {
            console.log('User Check couldn\'t find any active cookies!')
            $('#navbar-right').append(
                '<li id="shopping-link">' +
                '<a href="../pages/loginPage.html?#">' +
                'Shopping Cart <img src="../assets/Images/shopping-cart-black-shape.png" class="userimg">' +
                '</a>'+
                '</li>'+
                '<li id="login">' +
                '<a href="../pages/loginPage.html?#">' +
                'Login or Signup<img src="../assets/Images/user-image-with-black-background.png" class="userimg">' +
                '</a>' +
                '</li>')

        } else {
            $('#navbar-right').append(
                '<li id="shopping-link">' +
                '<a href="../pages/shoppingCart.html">' +
                'Shopping Cart <img src="../assets/Images/shopping-cart-black-shape.png" class="userimg">' +
                '</a>' +
                '</li>'+
                '<li id="logout">' +
                '<a href="../pages/loginPage.html?#">' +
                'Log out<img src="../assets/Images/user-image-with-black-background.png" class="userimg">' +
                '</a>' +
                '</li>')
        }
    })
})

function checkCookie() {
    return new Promise((res, rej) => {
        $.get(ip + "api/user/check", function (data) {
            console.log("looking for cookies, found: ", data)
            if (data.length > 0) {
                var name = data[0].name;
                res(name)
            } else {
                res(false)
            }
        })
    })
}