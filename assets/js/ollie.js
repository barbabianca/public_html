/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    autoplay: true, // enable automatic slide
    autoplayTimeout: 1000, // set automatic slide timeout to 5 seconds
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})

// select the read-more link and hidden paragraph
const readMoreLink = $('#about .read-more');
const hiddenParagraph = $('#about p');

// add a click event listener to the read-more link
readMoreLink.on('click', function(event) {
  // prevent the default link behavior
  event.preventDefault();

  // remove the "d-none" class from the paragraph to show the full text
  hiddenParagraph.removeClass('d-none');

  // hide the read-more link by setting its display property to "none"
  readMoreLink.hide();
});


