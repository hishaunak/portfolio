
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
     $(".default-header").sticky({topSpacing:0});

  
  //------- Active Nice Select --------//
     $('select').niceSelect();
    


    $('.active-slider').owlCarousel({
        center: true,
        items:1,
        loop:true
    })
    $('.next-trigger').click(function() {
        $(".active-slider").trigger('next.owl.carousel');
    })
        // Go to the previous item
    $('.prev-trigger').click(function() {
        $(".active-slider").trigger('prev.owl.carousel');
    });



     
   // -------   Active Mobile Menu-----//

  $(".menu-bar").on('click', function(e){
      e.preventDefault();
      $("nav").toggleClass('hide');
      $("span", this).toggleClass("lnr-menu lnr-cross");
      $(".main-menu").addClass('mobile-menu');
  });


  $('.nav-item a:first').tab('show');


     if(document.getElementById("gallery")){
          $('select').niceSelect();
    };


   if(document.getElementById("default-select")){
      $('.img-pop-up').magnificPopup({
          type: 'image',
          gallery:{
          enabled:true
          }
      });  
  };


  $('.gal a').simpleLightbox();


  // Select all links with hashes
  $('.main-menubar a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top-68
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


      $( function() {
          $( "#datepicker" ).datepicker();
          $( "#datepicker2" ).datepicker();
       });

    

      // -------   Mail Send ajax

         $(document).ready(function() {
            var form = $('#myForm'); // contact form
            var submit = $('.submit-btn'); // submit button
            var alert = $('.alert-msg'); // alert div for show alert message

            // form submit event
            form.on('submit', function(e) {
                e.preventDefault(); // prevent default form submit

                $.ajax({
                    url: 'mail.php', // form action url
                    type: 'POST', // form submit method get/post
                    dataType: 'html', // request type html/json/xml
                    data: form.serialize(), // serialize form data
                    beforeSend: function() {
                        alert.fadeOut();
                        submit.html('Sending....'); // change submit button text
                    },
                    success: function(data) {
                        alert.html(data).fadeIn(); // fade in response data
                        form.trigger('reset'); // reset form
                        submit.attr("style", "display: none !important");; // reset submit button text
                    },
                    error: function(e) {
                        console.log(e)
                    }
                });
            });
        });


 });

// show more
document.getElementById("read_more").addEventListener( 'click' , changeClass);

function changeClass() {
    var content = document.getElementById("extra_content");
    var btn = document.getElementById("read_more");
    content.classList.toggle('show');
    
    if (content.classList.contains("show")) {
            btn.innerHTML = "Show Less";
        } else {
            btn.innerHTML = "Show More";
        }
}
function myFunction() {
  var x = document.getElementById("myDIV");
  var btn = document.getElementById("read_more");
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.innerHTML = "Show Less";
  } else {
    x.style.display = "none";
    btn.innerHTML = "Show More";
  }
}

var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(function (item) {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = "".concat(el.offsetWidth, "px");
  indicator.style.left = "".concat(el.offsetLeft, "px");
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    handleIndicator(e.target);
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

var mybutton = document.getElementById("mytop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function sendMail() {
  var subject = $('#contact #subject').val();
  var name = $('#contact #name').val();
  var email = $('#contact #email').val();
  var number = $('#contact #number').val();
  var message = $('#contact textarea').val();
  window.location.href = 'mailto:hishaunak@gmail.com?subject= Received Mail from Website : ' + subject + '&body= Name - ' + name + '%0D%0A Email - '+ email + '%0D%0A Number - '+ number + '%0D%0A Message - '+ message;
};




$('button').click(function(){    
  if(this.id == 'btn1'){
    $('.theatrearea').show();
    $('.filmsarea').hide();
  }else{
    $('.theatrearea').hide();
    $('.filmsarea').show();
  }
})