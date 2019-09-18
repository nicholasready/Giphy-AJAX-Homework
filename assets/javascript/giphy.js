var topics = ["Ariel", "Moana", "Cinderella", "Jasmine"];
var newTopic = "";

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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + princess + "&api_key=DuIbhSWXd8S7GvuiDX3St3JTEfgQI0wn&limit=10";
console.log(queryURL);
    // Creating an AJAX call for the specific princess button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
console.log(response);
    $("#gifGoesHere").empty();
    var results = response.data; 
    for (var i=0; i<results.length; i++){

        var gifDiv = $("<div>"); //div for the gifs to go inside
        gifDiv.addClass("gifDiv");
        // pulling rating of gif
        var gifRating = $("<p>").text("Rating: " + results[i].rating);
        gifDiv.append(gifRating);
        // pulling gif
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
        gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
        gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
        gifImage.attr("data-state", "still"); // set the image state
        gifImage.addClass("image");
        gifDiv.append(gifImage);
        // pulling still image of gif
        // adding div of gifs to gifsView div
        $("#gifGoesHere").prepend(gifDiv);
    }

    
    });

  }
 
 $("#addPrincess").on("click", function(event) {
    event.preventDefault();
  
    var princess = $("#princessInput").val().trim();

    // Adding princess from the textbox to our array
    topics.push(princess);
    showButtons();
  });

 
  $(document).on("click", ".princess-btn", displayPrincessGifs);

