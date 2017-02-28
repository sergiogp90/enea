
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITs AND TELL YOUR FRIENDS ABOUT US

    ========================================================  */


(function($) {
    "use strict";
    var mainApp = {

        main_fun: function() {

            /*====================================
             EASING PLUGIN SCRIPTS
            ======================================*/
            $(function() {
                $('.move-me a').bind('click', function(event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
            /*====================================
            SKILL CHART SCRIPTS
           ======================================*/
            $(function() {
                $('.chart').easyPieChart({
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    },
                    barColor: '#05D6AC', //FORCOLOR OF CHART
                    lineWidth: 10, //WIDTH OF STRIP OF SKILL CHART
                    size: 150, //WIDTH - HEIGHT OF SKILL CHART(SHOULD BE IN SQUARE)
                });

            });
            /*====================================
           DOWNLOAD RESUME SECTION TOOL TIP SCRIPTS
          ======================================*/
            $(function() {
                $('a[title]').tooltip();
            });
            /*====================================
       TESTIMONIAL SECTION SCRIPTS
       ======================================*/
            $('#testimonial-main').carousel({
                interval: 4000 //TIME IN MILLI SECONDS
            })
            /*====================================
          PRETTYPHOTO FUNCTION
          ======================================*/

            $("a.preview").prettyPhoto({
                social_tools: false
            });
            /*====================================
             WOW PLUGIN SCRIPTS
            ======================================*/
            new WOW().init();


            /*====================================
            WRITE YOUR SCRIPTS HERE
            ======================================*/





        },

        initialization: function() {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function() {
        mainApp.main_fun();

        $(".toggle_container").hide();

        $("p.trigger").click(function() {
            $(this).toggleClass("active").next().slideToggle("normal");
            $(this).hasClass('active') ? $(this).find('a').text("Leer menos...") : $(this).find('a').text("Leer más...");
        });

        $('.trigger_reggio').click(function() {
            $(this).toggleClass("active");
            $('.container_reggio').slideToggle("normal");
            $(this).hasClass('active') ? $(this).find('a').text("Leer menos...") : $(this).find('a').text("Leer más...");
        });

        $('.service-title').textfill({
            maxFontPixels: 18,
            minFontPixels: 10
        });

        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '.infantil',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolioFilter button').click(function() {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });


    });

}(jQuery));
