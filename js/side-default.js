$(document).ready(function() {
    var mode = 1;
    configureMenus();
    

    $('#spnUserMenu').stop().mouseenter(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).animate({
            "background": 'white'},
            400, function() {
            $('.ulUserMenu').show();
            $(this).find('.divTriangleNub').show();
        });

    }).mouseleave(function(event) {
        /* Act on the event */
        $('.ulUserMenu').hide();
        $(this).stop();
        $(this).find('.divTriangleNub').show();
    });


    $(document).on('click','.hasDropDown' , function(event) {
        event.stopPropagation();
        var destination = $(this).data('dropdown');
        $('.divDropDown').not('#'+destination).fadeOut('fast');
        $('#'+destination).fadeToggle('fast');
    });

    $('body').on('click', function(event) {
        if (!$(event.target).closest(".hasDropDown").length) {
            $('.divDropDown').fadeOut('fast');
            $('.divDropDownColWrapper').hide();
        }
    });

    $(document).on('click','.divDropDown', function(event) {
        event.stopPropagation();
        /* Act on the event */
    });

    $(document).on('click','.hasdropdownwidget', function(event) {
        $(this).toggleClass('open');
        event.stopPropagation();
    });
    $(document).on('click', 'body', function(event) {
      $('.hasdropdownwidget').removeClass('open');      
    });
    // $(document).on('click','.hasdropdownwidget', function(event) {
    //     event.preventDefault();
    //     $(this).removeClass('open');
    // });

});


//function to control menu behavior based on screen size
function configureMenus() {
        // variable to hold current window state - small, medium, or large
         var windowState = 'large';
          
          // check intital width of the screen, respond with appropriate menu
         var sw = document.body.clientWidth;
         if (sw < 980) {
             smMenu();
         } else if (sw >= 980) {
            lgMenu();
            // $('.hasSubMenu').stop().mouseenter(function() {
            // $(this).animate({
            //  "background": 'white'},
            //  400, function() {
            //  $(this).find('.divSubNavWrapper').show();
            // });

            // }).mouseleave(function(event) {
            //  /* Act on the event */
            //  $('.divSubNavWrapper').hide();
            //  $(this).stop();
            // });
         } 
          
          // take care of resizing the window
          $(window).resize(function() {
              var sw = document.body.clientWidth;
              if (sw < 980 && windowState != 'small') {
                 smMenu();
              }
              if (sw > 980 &&  windowState != 'large') {
                 lgMenu();
                 // $('.hasSubMenu').stop().mouseenter(function() {
                 // $(this).animate({
                 //     "background": 'white'},
                 //     400, function() {
                 //     $(this).find('.divSubNavWrapper').show();
                 // });

                 // }).mouseleave(function(event) {
                 //     /* Act on the event */
                 //     $('.divSubNavWrapper').hide();
                 //     $(this).stop();
                 // });
              } 
          });


        

        function smMenu() {
            // since we may be switching from another menu, reset the menu first
            //unbind click and touch events    
            $('.divMenuToggle').off('click');
            // $('.hasSubMenu').off('mouseenter mouseleave');
            // $('.topMenu h3').off('click touchstart');
            $('html').off('touchstart');
            $('.hasSubMenu a').off('click');
            $('#mainNav').off('touchstart');
            //reset the menu in case it's being resized from a medium screen    
            // remove any expanded menus
            $('.expand').removeClass('expand');
            // $('.menuToggle').remove();
            //now that the menu is reset, add the toggle and reinitialize the indicator
             // $('.topMenu').before('<div class="menuToggle"><a href="#">menu<span class="indicator">+</span></a></div>');
            // append the + indicator
             // $('.topMenu h3').append('<span class="indicator">+</span>');
        
            // wire up clicks and changing the various menu states
            //we'll use clicks instead of touch in case a smaller screen has a pointer device
            //first, let's deal with the menu toggle
            // $('.menuToggle a').click(function() {
            //     //expand the menu
            //     $('.topMenu').toggleClass('expand');
            //     // figure out whether the indicator should be changed to + or -
            //     var newValue = $(this).find('span.indicator').text() == '+' ? '-' : '+';
            //     // set the new value of the indicator
            //     $(this).find('span.indicator').text(newValue);
            // });
            $('.divMenuToggle').click(function() {
                //expand the menu
                $('.ulPrimaryNav').toggleClass('expand');
                $(this).find('.spn1').toggleClass('spnLine1');
                $(this).find('.spn2').toggleClass('spnLine2').toggleClass('spnCross');
                // figure out whether the indicator should be changed to + or -
                // set the new value of the indicator
                // $(this).find('span.indicator').text(newValue);
            });


            


            $(".hasSubMenu > a").click(function(e) {
                e.preventDefault();
                //find the current submenu
                var currentItem = $(this).siblings('.divSubNavWrapper');
                //remove the expand class from other submenus to close any currently open submenus
                $('.divSubNavWrapper').not(currentItem).removeClass('expand');
                //change the indicator of any closed submenus
                //open the selected submenu
                if (currentItem.hasClass('expand')) {
                    currentItem.removeClass('expand')
                } else {
                    currentItem.addClass('expand')
                };
                // currentItem.toggleClass('expand');
                //change the selected submenu indicator
            });
            //indicate current window state
            windowState = 'small';
        }
        
        
        
        function lgMenu() {
            //largely what we'll do here is simple remove functionality that
            //may be left behind by other screen sizes
            //at this size the menu will function as a pure-css driven dropdown
            //advances in touch screen are beginning to make us re-think
            //this approach
            // unbind click and touch events    
            // $('.menuToggle a').off('click');
            // $('.topMenu h3').off('click touchstart');
            $('html').off('touchstart');
            $('#mainNav').off('touchstart');
            
            // remove any expanded submenus
            $('.ulPrimaryNav').find('.hasSubMenu').removeClass('expand');
            
            // remove the span tags inside the menu
            // $('.topMenu h3').find('span.indicator').remove();
            
            // remove the "menu" element
            // $('.menuToggle').remove();

            

            $('.ulPrimaryNav').removeClass('expand');
            $('.divMenuToggle').find('.spn1').removeClass('spnLine1');
            $('.divMenuToggle').find('.spn2').removeClass('spnLine2').addClass('spnCross');
            
            // $('.hasSubMenu').stop().on('mouseenter', function(event) {
            //     $(this).animate({
            //      "background": 'white'},
            //      400, function() {
            //      $(this).find('.divSubNavWrapper').show();
            //     });
            // });
            // $('.hasSubMenu').stop().on('mouseleave', function(event) {
            //     $('.divSubNavWrapper').hide();
            //      $(this).stop();
            // });
            $('.hasSubMenu').stop().mouseenter(function() {
                $(this).animate({
                 "background": 'white'},
                 400, function() {
                 $(this).find('.divSubNavWrapper').show();
                });
            }).mouseleave(function(event) {
                 /* Act on the event */
                 $('.divSubNavWrapper').hide();
                 $(this).stop();
            });
            //indicate current window state
            windowState = 'large';
        }
}

$(window).on('scroll', function () {
    var scrolltop = $(window).scrollTop();
    var mainheader = $('#mainHeader');
    if (scrolltop > 200) {
        mainheader.removeClass('light');
    } else {
        mainheader.addClass('light');
    }
    if (scrolltop > $('#helpArticle').height() && $('.text-sec').css('margin-top') != "0px") {
        $('.text-sec').css('margin-top', '0');
        $(window).scrollTop(0)
    }
});

//function to swap ul menus for select elements at smaller screen sizes
// function toggleSelect() {
//     //establish the default window state
//     var windowState = 'large';
    
//     //check to see if the screen is smaller than 980 pixels
//     $(document).ready(function() {
//         var sw = document.body.clientWidth;
//         if (sw < 769) {
//            smScreen();
//         }
//     })
//     // take care of resizing the window
//     $(window).resize(function() {
//         var sw = document.body.clientWidth;
//         if (sw < 769 && windowState == 'large') {
//            smScreen();
//         } 
//         if (sw > 768 && windowState == 'small') {
//             lgScreen();
//         }
//     });
//     //convert list menus to select elements
//     function smScreen() {
//         //find the ul you wish to change
//         $('nav.archives ul').each(function() {
//             //add a select element
//             var $select = $('<select />');
//             //add an initial choice for the select element and assign its attributes
//             var $initial = $('<option>Choose a gallery</option>');
//             $initial.attr({
//                 value: '#',
//                 selected: 'selected'
//             });
//             //add the initial choice to the select element
//             $select.append($initial);
//             //populate the select element with links from the list menu
//             $(this).find('a').each(function() {
//                 //go through each link and create an option in the select for each one
//                 var $option = $('<option />');
//                 //populate the option with data from the links
//                 $option.attr('value', $(this).attr('href')).html($(this).html());
//                 $option.attr('title', $(this).attr('title'));
//                 //add each option to the select element
//                 $select.append($option);
//             });
//             //when an option is selected, navigate to the selected page
//             $select.change(function() {
//       window.location = $(this).find("option:selected").val();
//     });
//             //target the ul and replace it with the generated select element
//             $(this).replaceWith($select);
//         });
//          //set the current window state to small
//           windowState = 'small';
//       };
//     //convert select elements to list menus
//     function lgScreen() {
//         //target the select menu
//        $('nav.archives select').each(function() {
//                 //remove the initial selection option
//                 $(this).find(':first-child').remove();
//                 //create an unordered list
//                var $ul = $('<ul />');
//                //go through the select and cycle through each option
//                $(this).find('option').each(function() {
//                    //for each option create a li and an anchor
//                    var $li = $('<li />');
//                    var $a = $('<a />');
//                    //populate the anchor attributes from the option
//                    $a.attr('href', $(this).attr('value')).html($(this).html());
//                    $a.attr('title', $(this).attr('title'));
//                    //add the li and anchors to the ul
//                    $ul.append($li);
//                    $li.append($a);
//                });
//                //replace the select with the generated ul
//                $(this).replaceWith($ul);
//            });
//            //set the current window state
//            windowState = 'large';
//       };
// }

// function configureMenus() {
//     // variable to hold current window state - small, or large

//     // check intital width of the screen, respond with appropriate menu
//     var sw = document.body.clientWidth;
//     if (sw < 979) {
//         smMenu();
//     } else if (sw > 980) {
//         lgMenu();
//     }
// }
// // take care of resizing the window
// $(window).resize(function() {
//     configureMenus();
//     // var sw = document.body.clientWidth;
//     // if (sw < 979) {
//     //     smMenu();
//     // }
//     // else if (sw > 980) {
//     //     lgMenu();
//     // }
// });
// function lgMenu () {
//     $('.hasSubMenu').stop().mouseenter(function() {
//         $(this).animate({
//             "background": 'white'},
//             400, function() {
//             $(this).find('.divSubNavWrapper').show();
//         });

//     }).mouseleave(function(event) {
         /*Act on the event */
//         $('.divSubNavWrapper').hide();
//         $(this).stop();
//     });

//     $('.ulPrimaryNav').removeClass('expand');
//     $('.divMenuToggle').find('.spn1').removeClass('spnLine1');
//     $('.divMenuToggle').find('.spn2').removeClass('spnLine2').addClass('spnCross');
//     windowState = 'large';

// }
// function smMenu() {

//     // since we may be switching from another menu, reset the menu first
//     //unbind click and touch events
//     $('.ulPrimaryNav a').off('click');
//     $('html').off('touchstart');
//     $('nav').off('touchstart');
//     //reset the menu in case it's being resized from a medium screen
//     // remove any expanded menus
//     $('.expand').removeClass('expand');

//     // wire up clicks and changing the various menu states
//     //we'll use clicks instead of touch in case a smaller screen has a pointer device
//     //first, let's deal with the menu toggle
//     $('.divMenuToggle').click(function() {
//         //expand the menu
//         $('.ulPrimaryNav').toggleClass('expand');
//         $(this).find('.spn1').toggleClass('spnLine1');
//         $(this).find('.spn2').toggleClass('spnLine2').toggleClass('spnCross');
//         // figure out whether the indicator should be changed to + or -
//         // set the new value of the indicator
//         // $(this).find('span.indicator').text(newValue);
//     });

//     //now we'll wire up the submenus
//     $(".hasSubMenu > a").click(function() {

//         //find the current submenu
//         var currentItem = $(this).siblings('.divSubNavWrapper');
//         //remove the expand class from other submenus to close any currently open submenus
//         $('.divSubNavWrapper').not(currentItem).removeClass('expand');
//         //change the indicator of any closed submenus
//         //open the selected submenu
//         if (currentItem.hasClass('expand')) {
//             currentItem.removeClass('expand')
//         } else {
//             currentItem.addClass('expand')
//         };
//         // currentItem.toggleClass('expand');
//         //change the selected submenu indicator
//     });
//     //indicate current window state

// }