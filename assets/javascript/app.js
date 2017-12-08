//on ready
$(document).ready(function(){

// initial array of animals
var animals = ["Cat", "Pig", "Dog", "Horse", "Seal"]

//re-render HTML to display correct info
function displayAnimalInfo() {
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=Ol3H8KaclyOexKTcBsn2auTsli7kzmL5&limit=10";

//ajax call for animal button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);

        var results = response.data; 

        // loop through results
        for (i = 0; i < results.length; i++) {

            //rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

            //div for placing our rating and gif
            var gifDiv = $("<div class='animal'>");

            //storing rating
            var rating = results[i].rating;

            //placing rating
            var ratingSpot = $("<p>").text("Rating: " + rating);

            //creating spot to place gif
            var animalImage = $("<img>");

            //assigning url to image tag
            animalImage.attr("src", results[i].images.fixed_height_small.url);
            

            //appending rating and image to our div
            gifDiv.append(ratingSpot);
            gifDiv.append(animalImage);

            //placing new gifs first
            $("#animalView").prepend(gifDiv);
            }
        }
    }
    )}

//change still / moving state

//render buttons function
function renderButtons() {
    $("#buttonsView").empty();

    for (var i = 0; i < animals.length; i++) {
        var button = $("<button type='button' class='btn btn-dark'>");
        button.addClass("animals");
        button.attr("data-name", animals[i]);
        button.text(animals[i]);
        $("#buttonsView").append(button);
        console.log(animals);
    }
}

//on click for when animal button is pressed
$("#add-animal").on("click", function() {
    event.preventDefault();
    var animal = $("#animal-input").val().trim();
    animals.push(animal);
    renderButtons();
})

//event listener for "animal" class
$(document).on("click", ".animals", displayAnimalInfo);

//render initial buttons
renderButtons();

});
//I am having trouble with a few parts of the homework

//display gifs on page
//empty out div that holds gifs before displaying more gifs
//on click event which starts and stops gifs from playing
