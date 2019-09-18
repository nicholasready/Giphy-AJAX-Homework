var topics = ["Ariel", "Moana", "Cinderella", "Jasmine"];
var newTopic = "";

//Function to show all the buttons
function showButtons() {
    $("#buttonsHere").empty();
    $("#princessInput").val("");

    for (var i = 0; i < topics.length; i++) {
        var button = $("<input type='button'/>");
        button.addClass("princess");
        button.attr("princess-name", topics[i]);
        button.text(topics[i]);
        $("#buttonsHere").append(button);
        $("#buttonsHere").append(" ");
    }
}
showButtons();

