// jQuery(document).ready(function($) {


//     /*======= Skillset *=======*/
    
    
//     $('.level-bar-inner').css('width', '0');
    
//     $(window).on('load', function() {

//     //     $('.level-bar-inner').each(function() {
        
//     //         var itemWidth = $(this).data('level');
            
//     //         $(this).animate({
//     //             width: itemWidth
//     //         }, 800);
            
//     //     });

//     $(window).scroll(function() {
//             var top_of_element = $(".level-bar-inner").offset().top;
//             var bottom_of_element = $(".level-bar-inner").offset().top + $(".level-bar-inner").outerHeight;
//             var bottom_of_screen = $(window).scrollTop() + $(window).height();

//             console.log('ttt')
//             if((bottom_of_screen > top_of_element) && (bottom_of_screen < bottom_of_element)){
//                 // The element is visible, do something
//                 console.log('aaa')
//                  $('.level-bar-inner').each(function() {
                
//                     var itemWidth = $(this).data('level');
                    
//                     $(this).animate({
//                         width: itemWidth
//                     }, 800);
                    
//                 });
//             }
//             else {
//                 console.log('lll')
//                 // The element is not visible, do something else
//                 $('.level-bar-inner').css('width', '0');
//             }
//         });
//     });

   
    

// });

$(document).ready(function() {
     $('.level-bar-inner').css('width', '0');
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.level-bar-inner').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                var itemWidth = $(this).data('level');
                    
                    $(this).animate({
                        width: itemWidth
                    }, 800);
                    
            }
            
        }); 
    
    });
    
});