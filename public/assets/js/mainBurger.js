

$(function () {
    // $(".change-devoured").on("click", function (event) {
    //     var id = $(this).data("id");
    //     var newDevour = $(this).data("newdevour");

    //     var newDevourState = {
    //         devour: newDevour
    //     };

    //     // Send the PUT request.
    //     $.ajax("/api/cats/" + id, {
    //         type: "PUT",
    //         data: newDevourState
    //     }).then(
    //         function () {
    //             console.log("changed sleep to", newDevour);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // }); 
    
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});