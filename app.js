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

        // Creating a div to hold the gifs
        var gifDiv = $("<div class='animal'>");
        for (i = 0; i < response.data[i]; i++) {
            var gif = $("<img>"+embed_url+"</img>");
            gifDiv.append(gif);
            

        }
        
        
    }
    )}

//render buttons function
function renderButtons() {
    $("#buttonsView").empty();

    for (var i = 0; i < animals.length; i++) {
        var button = $("<button>");
        button.addClass("animal");
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
$(document).on("click", ".animal", displayAnimalInfo);

//render initial buttons
renderButtons();

});
//I am having trouble with a few parts of the homework

//display gifs on page
//empty out div that holds gifs before displaying more gifs
//on click event which starts and stops gifs from playing
