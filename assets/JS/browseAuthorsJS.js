var ip = "https://booktobook.herokuapp.com/api";
//var ip = "http://localhost:8080/api";



//---------------------------------------------------------------------
//Function used to retrieve user input from the URL
//---------------------------------------------------------------------
var getUrlParameter = function getUrlParameter(sParam) {
    console.log("inside 'getUrlParameter'");
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
//---------------------------------------------------------------------
//getting user input
//---------------------------------------------------------------------
const input = getUrlParameter('search-text');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundAuthors(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "/author/findByName?Name=" + input, true);
xhttp.send();



//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundAuthors = function(authors_list) {
    var serach_result_div = document.getElementById('search-result');
    var parsed = JSON.parse(authors_list);
    console.log("parsed: ", parsed);

    for(var author of parsed){

        var name = author.name;
        var bio = author.bio;

        console.log(name);

        generateAuthorDiv(name)
    }
};


var generateAuthorDiv = function (name) {

    var $div1 = $("<div />", {class : "list-group-item clearfix"});
    var $div2 = $("<div class = 'row'/>");
    var $div3 = $("<div class = 'col-2 col-2-hidden-xs'>");
    var $div4 = $("<div class = 'book-img'/>");
    var $im = $("<img />", { src : "../assets/Images/AuthorPictures/Thumbnails/Quentin Blake.jpg"});
    var $div5 = $("<div class = 'col-8 col-8-bigger-xs'/>");
    var $h = $("<h3 />", {id : 'title', class : 'book-title'}); $h.html(name);
    var $div6 = $("<div class = 'book-info'/>");
    var $div7 = $("<div class = 'info'/>");
    var $s7 = $("<span />"); $s7.html('Info:');
    var $p7 = $("<p class='bio'/>"); $p7.html("Probably Dead");


    $("#search-results-container").append($div1);
    $div1.append($div2);
    $div2.append($div3);
    $div3.append($div4);
    $div4.append($im);
    $div2.append($div5);
    $div5.append($h);
    $div5.append($div6);
    $div6.append($div7);
    $div7.append($s7);
    $div7.append($p7);

};







//---------------------------------------------------------------------
//this is the structure of the book div
//---------------------------------------------------------------------
/*

1<div id="example-book-div" class="list-group-item clearfix">
   2 <div class="row">
       3 <div class="col-2 col-2-hidden-xs">
           4 <div class="book-img"><img src="../assets/Images/game of thrones.jpg"/></div>
        </div>

      5  <div class="col-8 col-8-bigger-xs">
            <h3 class="book-title">Game of Thrones</h3>
           6 <div class="book-info">
              7  <div class="info"><span class="">Info:</span> Something here</div>
              8  <div class="info"><span class="">Info:</span> Something here</div>
            </div>
        </div>
      9  <div class="col-2 col-2-muchbigger-xs noleft-pad">
            <button id="add-book-btn-1" class="btn btn-outline-success btn-add-book" type="input">Add to Cart</button>
        </div>
    </div>
</div><!-- item -->
*/