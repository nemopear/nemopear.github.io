function TopSlideshow(element) {
    var context;
    this.carousel = $(element);
    this.responsiveOption = {};
    this.body = $('body');
    this.slideContent = this.carousel.find('.slideContentContainer');

    this.init = function () {
        this.onScreenChange();
        this.slides = this.carousel.find('.slideItem');
        this.isCarousel = this.carousel.attr('data-isCarousel') ? true : false;
        this.hasMargin = this.carousel.attr('data-margin') ? true : false;
        this.margin = this.hasMargin ? parseInt(this.carousel.attr('data-margin')) : 0;
        this.responsiveOption = this.responsiveOptions();
        if (this.slides.length >= 1) {
            this.viewPort();
            this.create();
            this.centerItem();
        }
    }

    this.onScreenChange = function () {
        $(window).resize(function () {
            context.viewPort();
        });
    }

    this.create = function () {
        this.setTiming();
        var isPlay = this.slides.length > 1 ? true : false;
        this.carousel.owlCarousel({
            autoplay: isPlay,
            autoplayTimeout: this.playTime,
            smartSpeed: this.transitionTime,
            items: 1,
            margin: this.margin,
            autoHeight: false,
            nav: true,
            dots: isPlay,
            navText: ["<i class='iconFont-i-pnn-arrow-left'></i>", "<i class='iconFont-i-pnn-arrow-right'></i>"],
            responsive: this.responsiveOption
            // onInitialized: function (property) {
            //     if (!context.isCarousel) {
            //         context.arrowPosition(property);
            //     }
            // },
            // onResized: function (property) {
            //     if (!context.isCarousel) {
            //         context.arrowPosition(property);
            //     }
            // }
        });

        // this.carousel.on('changed.owl.carousel', function (property) {
        //     if (!context.isCarousel) {
        //         setTimeout(function () { context.arrowPosition(property); }, 200);
        //     }
        // });
    }

    this.responsiveOptions = function () {
        this.setItemsResponsive();
        var options = {
            0: {
                items: parseInt(this.responsiveMobile),
                loop: true
            },
            768: {
                items: parseInt(this.responsiveTablet),
                loop: this.isCarousel ? (this.slides.length <= 2 ? false : true) : true
            },
            992: {
                items: parseInt(this.responsiveDesktop),
                loop: this.isCarousel ? (this.slides.length <= 3 ? false : true) : true
            }
        }

        return options;
    }

    this.setTiming = function () {
        this.transitionTime = parseInt(this.carousel.attr('data-transitionTime'));
        this.pauseTime = parseInt(this.carousel.attr('data-pauseTime'));
        this.playTime = this.pauseTime;
        this.playTime = 0;
        if (this.transitionTime < 500) {
            this.transitionTime = 500;
        }
        this.playTime = this.pauseTime + this.transitionTime;

    }

    this.setItemsResponsive = function () {
        this.dataResponsiveItem = this.carousel.attr('data-responsiveItem');
        if (this.dataResponsiveItem != null) {
            var responsiveNumberItem = [];
            responsiveNumberItem = this.dataResponsiveItem.split(",");

            this.responsiveMobile = responsiveNumberItem[0];
            this.responsiveTablet = responsiveNumberItem[1];
            this.responsiveDesktop = responsiveNumberItem[2];
        } else {
            this.responsiveMobile = 1;
            this.responsiveTablet = 1;
            this.responsiveDesktop = 1;
        }
    }

    this.viewPort = function () {
        /* Each brouser have different vertical scrollbar */
        var scrollBarWidth = window.innerWidth - this.body.width();
        var is_safari = navigator.userAgent.indexOf("Safari") > -1;
        $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
        if (!is_safari) {
            if ($(window).width() > (992 - scrollBarWidth)) {
                this.isDestop = true;
            } else {
                this.isDestop = false;
            }
        } else if ($.browser.chrome) {
            if ($(window).width() > (992 - scrollBarWidth)) {
                this.isDestop = true;
            } else {
                this.isDestop = false;
            }
        } else {
            if ($(window).width() > 992) {
                this.isDestop = true;
            } else {
                this.isDestop = false;
            }
        }
    }

    // this.arrowPosition = function (property) {
    //     this.owlNav = this.carousel.find('.owl-nav');

    //     if (property != null) {
    //         var currentIndex = property.page.index;
    //         if (this.isDestop == false) {
    //             if (property.page.index == -1) {
    //                 currentIndex = 0;
    //             }
    //             var slideshowHeight = this.carousel.height();
    //             var slideshowContentHeight = $(property.target).find('.owl-item').eq(currentIndex).find('.slideContentContainer').outerHeight(true);
    //             var arrowHeight = this.owlNav.children().height();
    //             var arrowTop = ((slideshowHeight - slideshowContentHeight) / 2) - (arrowHeight / 2);

    //             this.owlNav.children().css('top', arrowTop);
    //         } else {
    //             this.owlNav.children().css('top', '50%');
    //         }
    //     }

    // }

    this.centerItem = function () {
        if (this.isCarousel == true) {
            if(this.slides.length == 1){
                this.carousel.addClass('oneItem');
            }
            if (this.slides.length == 2) {
                this.carousel.addClass('twoItem');
            }
        }
    }

    context = this;
    this.init();
}

var slides = [];
$(window).load(function () {
    var slide_index = 0;
    $('.slideList').each(function () {
        slides[slide_index] = new TopSlideshow(this);
        slide_index++;
    });
});

$(function () {
    truncateText('.slideContentShortInfo');
});