$(document).ready(function() {
    // Create random sprinkle elements
    for (let i = 0; i < 100; i++) { // Adjust number for more/less sprinkles
        let sprinkle = $('<div></div>');
        sprinkle.css({
            top: Math.random() * 100 + 'vh',
            left: Math.random() * 100 + 'vw',
            backgroundColor: 'hsl(' + Math.random() * 360 + ', 70%, 80%)' // Random color
        });
        $('#sprinkles').append(sprinkle);
    }

    $('#nextButton').click(function() {
        $(this).hide();
        $('#sticker').fadeIn().find('img').addClass('animated zoomIn');
        setTimeout(function() {
            $('#revealButton').fadeIn();
        }, 2000); // Adjust delay if needed
    });

    $('#revealButton').click(function() {
        $('#surpriseMessage').slideToggle().addClass('animated heartBeat');
    });
});
