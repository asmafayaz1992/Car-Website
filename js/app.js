(function($, document, window) {

    $(document).ready(function() {

        // hero-slider
        $(".hero-slider").flexslider({
            controlNav: true,
            directionNav: false,
            animation: "fade"
        });

        $(".menu-toggle").click(function() {
            $(".mobile-navigation").slideToggle();
        });
        $(".mobile-navigation").append($(".main-navigation .menu").clone());


        // Changing background image using data-attribute
        $("[data-bg-image]").each(function() {
            var image = $(this).data("bg-image");
            $(this).css("background-image", "url(" + image + ")");
        });

        // Changing background color using data-attribute
        $("[data-bg-color]").each(function() {
            var color = $(this).data("bg-color");
            $(this).css("background-color", color);
        });

        var $container = $('.filterable-items');

        $container.imagesLoaded(function() {
            $container.isotope({
                filter: '*',
                layoutMode: 'fitRows',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

        });
        $('.filterable-nav a').click(function(e) {
            e.preventDefault();
            $('.filterable-nav .current').removeClass('current');
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
        $('.mobile-filter').change(function() {

            var selector = $(this).val();
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

        initLightbox({
            selector: '.filterable-item a',
            overlay: true,
            closeButton: true,
            arrow: true
        });

        $('.map').gmap3({
                map: {
                    options: {
                        maxZoom: 14
                    }
                },
                marker: {
                    address: "40 Sibley St, Detroit",
                    options: {
                        icon: new google.maps.MarkerImage(
                            "images/map-marker.png",
                            new google.maps.Size(43, 53, "px", "px")
                        )
                    }
                }
            },
            "autofit");

    });

    $(window).load(function() {

    });

})(jQuery, document, window);

window.addEventListener('load', () => {
    console.log('Hello, world!')
})

! function() { "use strict"; var t = document,
        e = function() { var e, r, o; if (t.getElementsByClassName) e = t.getElementsByClassName("trustpilot-widget");
            else if (t.querySelectorAll) e = t.querySelectorAll(".trustpilot-widget");
            else { var s = [],
                    a = new RegExp("(^| )trustpilot-widget( |$)"),
                    l = t.body.getElementsByTagName("*"); for (r = 0, o = l.length; r < o; r++) a.test(l[r].className) && s.push(l[r]);
                e = s } for (r = 0; r < e.length; ++r)
                for (var i = e[r]; i.firstChild;) i.removeChild(i.firstChild) };
    e(), t.addEventListener ? t.addEventListener("DOMContentLoaded", e) : t.attachEvent("onreadystatechange", function() { "complete" == t.readyState && e() }); var r = "https:" == t.location.protocol ? "https:" : "http:",
        o = r + "//widget.trustpilot.com",
        s = t.createElement("script");
    s.src = o + "/bootstrap/v5/tp.widget.bootstrap.min.js", s.async = !0, s.defer = !0, t.querySelector("head").appendChild(s) }();