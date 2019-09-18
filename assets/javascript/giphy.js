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

 
 $("#addPrincess").on("click", function(event) {
    event.preventDefault();
  
    var princess = $("#princessInput").val().trim();

    // Adding movie from the textbox to our array
    topics.push(princess);

    // Calling renderButtons which handles the processing of our movie array
    showButtons();
  });

  // Adding a click event listener to all elements with a class of "movie-btn"
  $(document).on("click", ".princess-btn", displayPrincessGifs);

