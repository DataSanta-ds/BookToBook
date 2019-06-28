//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";


//---------------------------------------------------------------------
// Function used to retrieve user input from the URL
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
// getting user input
//---------------------------------------------------------------------
const input = getUrlParameter('search-text');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundGenres(this.responseText);
        });
    }
};
console.log("getting genres!");
xhttp.open("GET", ip + "api/genre/", true);
xhttp.send();


//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var displayFoundGenres = function (genre_list) {


    var parsed = JSON.parse(genre_list);
    console.log("parsed: ", parsed);

    var n = Math.ceil(parsed.length / 4);

    generategenreDivs(parsed, n);

};




$(document).ready(function(){


    $('#add').click(function(){


        //for(var i =0; i < timelineLength; i++){

        if($('ul.timeline li').length % 2 == 0){
            $('.timeline').prepend(
                '<li class="timeline-inverted">'
                +'<div class="timeline-badge info"><i class="glyphicon glyphicon-calendar"></i></div>'
                +'<div class="timeline-panel">'
                +'<div class="timeline-heading">'
                +'<h4 class="timeline-title">Bootstrap 3 released</h4>'
                +'<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> August 2013</small></p>'
                +'</div>'
                +'<div class="timeline-body">'
                +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate.'
                +'Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis'
                +'dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan.'
                +'Aliquam in felis sit amet augue.</p>'
                +'</div>'
                +'</div>'
                +'</li>'
            );

        }
        else{

            $('.timeline').prepend(
                '<li>'
                +'<div class="timeline-badge info"><i class="glyphicon glyphicon-calendar"></i></div>'
                +'<div class="timeline-panel">'
                +'<div class="timeline-heading">'
                +'<h4 class="timeline-title">Bootstrap 3 released</h4>'
                +'<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> August 2013</small></p>'
                +'</div>'
                +'<div class="timeline-body">'
                +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate.'
                +'Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis'
                +'dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan.'
                +'Aliquam in felis sit amet augue.</p>'
                +'</div>'
                +'</div>'
                +'</li>'
            );
            alert(timelineLength);




            // }

        }
    });





})