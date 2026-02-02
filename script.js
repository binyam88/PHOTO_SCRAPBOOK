$(document).ready(function() {
    // Initialize Turn.js
    $("#book").turn({
        width: 900,    // Match CSS width
        height: 600,   // Match CSS height
        autoCenter: true,
        display: 'double', // Double-page view like a real book
        acceleration: true,
        gradients: true,   // Page flip gradients
        elevation: 50,     // 3D page lift
        duration: 1000,    // Flip speed
        when: {
            turned: function(event, page, view) {
                console.log("Page turned to: " + page);
            }
        }
    });

    // Keyboard navigation (left/right arrows)
    $(window).bind('keydown', function(e) {
        if (e.keyCode == 37) { // Left arrow
            $("#book").turn("previous");
        } else if (e.keyCode == 39) { // Right arrow
            $("#book").turn("next");
        }
    });
});
