var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-main',
  });


$(function () {
    var isAnimatedScroll = false;
    var width=$(window).width();
    if (width > 950){
        $(window).scroll(function () {
            setupVisibleElementAnimations();
    });
    } else {
        var $els = $(".invis");
        $els.each(function () {
            var $el = $(this);
            $el.removeClass("invis");
        });
    }

    $(window).on("load");

    function setupVisibleElementAnimations() {
        var $els = $("[data-animation]");
        
        $els.each(function () {
            var $el = $(this);

            if ($el.hasClass("animated")) {
                return;
            } else if (!$el.hasClass("animated") && isElementInView($el)) {
                var animationClass = $el.attr("data-animation");
                var animationDelay = $el.attr('data-delay');
                $el.css({
                    "-webkit-animation-delay": animationDelay,
                    "-moz-animation-delay": animationDelay,
                    "animation-delay": animationDelay
                });
                $el.addClass("animated").addClass(animationClass);
                $el.removeClass("invis");
            }
        });
    }

    function isElementInView(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    });