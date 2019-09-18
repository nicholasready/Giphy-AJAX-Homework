var topics = ["Ariel", "Moana", "Cinderella", "Jasmine"];


//Function to show all the buttons
function showButtons() {
    $("#buttonsHere").empty();
    $("#princessInput").val("");

    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.addClass("princess-btn");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#buttonsHere").append(button);
        $("#buttonsHere").append(" ");
    }
}
showButtons();

function displayPrincessGifs() {

    var princess = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + princess + "&api_key=DuIbhSWXd8S7GvuiDX3St3JTEfgQI0wn&limit=10";
    console.log(queryURL);
    // Creating an AJAX call for the specific princess button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            $("#gifGoesHere").empty();
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                var gifDiv = $("<div>"); //Create a div using Jquery for the gifs to go inside
                gifDiv.addClass("gifDiv");
                // pulling rating of gif
                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);


                // pulling the gif
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
                gifImage.attr("data-still", results[i].images.fixed_height_small_still.url); // still image
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url); // animated image
                gifImage.attr("data-state", "still"); // set the image state. I know i'm setting it because there are two 
                gifImage.addClass("image");

                gifDiv.append(gifImage);
                // pulling still image of gif
                // adding div of gifs to gifsView div
                $("#gifGoesHere").prepend(gifDiv);
            }


        });

}

$("#addPrincess").on("click", function (event) {
    event.preventDefault();

    var princess = $("#princessInput").val().trim();

    // Adding princess from the textbox to the array
    topics.push(princess);
    showButtons();
});

//An event listener that makes the displayPrincessGif function go off when the button with princess-btn class is clicked.
$(document).on("click", ".princess-btn", displayPrincessGifs);


// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// Then, set the image's data-state to animate
// Else set src to the data-still value
$(document).on("click", ".image", function () {
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});

