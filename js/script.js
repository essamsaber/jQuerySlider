$(function () {
    'use strict';
    // Set Options
    var speed = 500, autoSwitch = true, autoSwitchSpeed = 2000;    // Auto slider speed
    
    // Addd initial active class 
    $('.slide').first().addClass('active');
    
    // Hide all slides
    $('.slide').hide();
    
    // Show only the first slide
    $('.active').show();
    
    // Take action when the user click the next button
    $('#next').on('click', next);
    
    
    // Take action when the user click the prev button
    $('#prev').on('click', prev);

    // Check if auto switch is equal true
    if (autoSwitch == true) {
        setInterval(next, autoSwitchSpeed);
    }
    
    // Declare next function
    function next() {
         // Remove the active class and add oldActive class
        $('.active').removeClass('active').addClass('oldActive');
        
        // Check if the oldActive class is the last child in the slide collection
        if ($('.oldActive').is(':last-child')) {
            // If Yes then fetch the first child then add active class to it 
            // and all of this in order to start from beginning again
            $('.slide').first().addClass('active');
        } else {
            // If the oldActive class is not the last child then add the active class to the next slide
            $('.oldActive').next().addClass('active');
        }
        // Remove the oldActive class
        $('.oldActive').removeClass('oldActive');
        // Fade out the current slide
        $('.slide').fadeOut(speed);
        // Fade in the next slide
        $('.active').fadeIn(speed);
    }
    
    
    // Declare prev function 
    function prev() {
         // Remove the active class and add oldActive class
        $('.active').removeClass('active').addClass('oldActive');
        
        // Check if the oldActive class is the last child in the slide collection
        if ($('.oldActive').is(':first-child')) {
            // If Yes then fetch the first child then add active class to it 
            // and all of this in order to start from beginning again
            $('.slide').last().addClass('active');
        } else {
            // If the oldActive class is not the last child then add the active class to the next slide
            $('.oldActive').prev().addClass('active');
        }
        // Remove the oldActive class
        $('.oldActive').removeClass('oldActive');
        // Fade out the current slide
        $('.slide').fadeOut(speed);
        // Fade in the next slide
        $('.active').fadeIn(speed);
    }
    
});