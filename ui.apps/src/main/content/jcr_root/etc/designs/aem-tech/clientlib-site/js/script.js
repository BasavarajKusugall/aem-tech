var gMenuLoop = 0;
$(window).on("scroll", function() {
    /*progressbar*/
    winHeight = jQuery(window).height(),
        docHeight = jQuery(document).height(),
        max = docHeight - winHeight,
        value = jQuery(window).scrollTop(),
        width = value / max * 100, width += "%",
        $(".progressbar").css({
            width: width
        })
        /*menu - sitch*/
});
$(window).bind('scroll', function() {
    var navHeight = $('.banner-section').height();
	var mainNavheight = $('.navbar-custome').height();
    if ($(window).scrollTop() > navHeight) {
        $('.NavWithReadTital').addClass('fixed');
        $('.switch-tital').addClass('active');
        $('.main-menu').removeClass('active');
		$('.leftsidebar').css('top','70px');
		$('.archivesDropdown').addClass('fixedSort').css('top', mainNavheight);
    } else {
        $('.navbar-custome').removeClass('fixed');
		$('.leftsidebar').css('top','0');
		$('.archivesDropdown').removeClass('fixedSort').css('top', mainNavheight);
        //$('.switch-tital').removeClass('active');
        //$('.main-menu').addClass('active');
    }
	
});
 
$(window).bind('scroll', function() {
    var navHeight = $('.banner-section').height();
	 var cookiConte = $('.cookiConte').height();
    if ($(window).scrollTop() > navHeight) {
        $('.fixNormal').addClass('fixedN');
		$('.homepagenav').addClass('cookisfix');
		$('.videoshuffel').addClass('fixVideoTop');
    } else {
        $('.navbar-custome').removeClass('fixedN');
		$('.DropdownMiandiv').removeClass('fixVideoTop');
		$('.homepagenav').removeClass('cookisfix');
        //$('.switch-tital').removeClass('active');
        //$('.main-menu').addClass('active');
    }
	 
});

$(document).ready(function(e) {
    /*body top padding*/
    var navHeight = $('.navbar-custome').height();
    $('body').css('padding-top', navHeight);
    /* conten margin*/
    var footerHeight = $('.footer').height();
    $('.content').css('margin-bottom', footerHeight)
        /* switch menu*/
    $('.desktop-menu-button').click(function() {
        $('.switch-tital').toggleClass('active');
        $('.main-menu').toggleClass('active');
        if ($('.main-menu').hasClass('active')) {
            displayMenu();
        } else {
            gMenuLoop = 0;
            removeMenu();
        }
    });
    /*menu - sitch normal mode*/
    $('.user-login').click(function(event) {
		$('.popupBox').fadeOut();
        event.preventDefault();
        var target = $(this).attr('href');
        $(target).fadeIn();
        $('body').css("overflow", "hidden");
    });
	$('.addPopBtn').click(function(){
		$('.wrapAddBox').fadeIn();
		});
		$('.closeaddbox').click(function(){
		$('.wrapAddBox').fadeOut();
		});
		
$('.searchBoxfild').focus(function(){
	$('.searchDropdown').fadeIn();
});
$('.searchBoxfild').focusout(function(){
	$('.searchDropdown').fadeOut();
});
var scrollTimerId;
$(window).scroll(function() {
    if (!scrollTimerId)
        $('.insta').addClass('scrolling');

    clearTimeout(scrollTimerId);
    scrollTimerId = setTimeout(function(){
        $('.insta').removeClass('scrolling');
        scrollTimerId = undefined;
    },150);
});

  $('.closevideos').click(function() {
        $('.DropdownMiandiv').removeClass('fixVideoTop');
		$('.DropdownMiandiv').removeClass('videoshuffel');
       // $('body').css("overflow", "");
    });
	
    $('.subscribepop-close').click(function() {
        $('.startUpPopup').fadeOut();
       // $('body').css("overflow", "");
    });
	 $('.closecookiespop').click(function() {
        $('.cookiConte').fadeOut();
       // $('body').css("overflow", "");
    });
	$('.closeNewsl').click(function() {
        $('.newsletter-popup').fadeOut();
     });
	
    $('.login-close').click(function() {
        $('.popupBox').fadeOut();
        $('body').css("overflow", "");
    });
	$('.emialSignupBtn').click(function(){
		$('.email-signup').toggleClass('slidesignup');
	});
	$('.email-signup .btnClose').click(function(){
		$('.email-signup').removeClass('slidesignup');
		
		});
   $('.viewallBtn').click(function(){
	   $('.singlImg').fadeToggle();
	   $('.viewAllImg').fadeToggle();
	});
	
	$('.viewAllImg li a').click(function(){
	   $('.singlImg').fadeToggle();
	   $('.viewAllImg').fadeToggle();
	});
	 

 

$('.playYoutubeVideo').click(function() {
        var youtubeVideoID = $(this).attr('rel');
        $('.frame').html(''); //Remove Iframe Code
        $(this).parent('.videoCon').parent('.wrapImgVideo').next('.frame').html('<iframe width="520" height="315" class="tabVideoFrame" style="display:block" src="https://www.youtube.com/embed/wPxqcq6Byq0?autoplay=1" frameborder="0" allowfullscreen></iframe> ');
        $('.videoTab').addClass('slidingMenu');
		$('.closeframe').fadeIn(500);
        //  $('.wrapImgVideo').removeClass('removeContVid');
        // $(this).parent('.wrapImgVideo').addClass('removeContVid');
    });
    $('.videoTab li > a').click(function() {
        $('.frame').html(''); //Remove Iframe Code
        $('.videoTab').removeClass('slidingMenu');
		$('.closeframe').fadeOut();
    });
	
	$('.closeframe').click(function(){
	 	$(this).hide();
        $('.frame').html(''); //Remove Iframe Code
        $('.videoTab').removeClass('slidingMenu');
    });
	
$('.videoDetails ul li a[data-toggle=tab]').click(function(){
  if ($(this).parent().hasClass('active')){
	$($(this).attr("href")).toggleClass('active');
  }
});
	
 
    /*$('.tabVideoFrame').each(function(){
    	$(this).stopVideo();
    });*/
    $('.mobileMoreView').click(function() {
        $('.mobileMoreView').toggleClass('opnsidebar');
        $(body).toggleClass('scrollOff');
    });
    /*slideshow socil*/
    if (jQuery().bxSlider) {
        if (jQuery('body').width() > 999) {
            $('.bedroom').bxSlider({
                slideWidth: 420,
                minSlides: 3,
                maxSlides: 3,
                slideMargin: 70,
                nextSelector: '#bedroom-next',
                prevSelector: '#bedroom-prev',
                nextText: '0',
                prevText: '0'
            });
			
			$('.featuredVideo').bxSlider({
                slideWidth: 500,
                minSlides: 4,
                maxSlides: 3,
                slideMargin: 30,
                nextSelector: '#featuredVideo-next',
                prevSelector: '#featuredVideo-prev',
                nextText: '0',
                prevText: '0'
            });
			
            $('.bathroom').bxSlider({
                slideWidth: 420,
                minSlides: 3,
                maxSlides: 3,
                slideMargin: 70,
                nextSelector: '#bathroom-next',
                prevSelector: '#bathroom-prev',
                nextText: '0',
                prevText: '0'
            });

        }
		else if (jQuery('body').width() > 560) {
            $('.bedroom').bxSlider({
                slideWidth: 420,
                minSlides: 2,
                maxSlides: 2,
                slideMargin: 20,
                nextSelector: '#bedroom-next',
                prevSelector: '#bedroom-prev',
                nextText: '0',
                prevText: '0'
            });
			
			$('.featuredVideo').bxSlider({
                slideWidth: 400,
                minSlides: 3,
                maxSlides: 2,
                slideMargin: 10,
                nextSelector: '#featuredVideo-next',
                prevSelector: '#featuredVideo-prev',
                nextText: '0',
                prevText: '0'
            });
			
            $('.bathroom').bxSlider({
                slideWidth: 420,
                minSlides: 2,
                maxSlides: 2,
                slideMargin: 20,
                nextSelector: '#bathroom-next',
                prevSelector: '#bathroom-prev',
                nextText: '0',
                prevText: '0'
            });

        }
		
		 else {
            $('.bedroom').bxSlider({
                slideWidth: 600,
                nextSelector: '#bedroom-next',
                prevSelector: '#bedroom-prev',
                nextText: '0',
                prevText: '0'
            });
			
			$('.featuredVideo').bxSlider({
                slideWidth: 600,
                nextSelector: '#featuredVideo-next',
                prevSelector: '#featuredVideo-prev',
                nextText: '0',
                prevText: '0'
            });
			
            $('.bathroom').bxSlider({
                slideWidth: 600,
                nextSelector: '#bathroom-next',
                prevSelector: '#bathroom-prev',
                nextText: '0',
                prevText: '0'
            });
			  $('.mobileSlide').bxSlider();
        }
    }
	 if (jQuery().bxSlider) {
		 
       var slider = $('.homepageMain').bxSlider({
			   	slideWidth:1300,
				minSlides: 1,
				maxSlides: 1,
				slideMargin: 5,
				 nextSelector: '#homepage-next',
				 prevSelector: '#homepage-prev',
				onSliderLoad: function () {
					$('.homepageMain>div:not(.bx-clone)').eq(0).addClass('active-slide');
				},
				onSlideAfter: function ($slideElement, oldIndex, newIndex) {
					$('.slide').removeClass('active-slide');
					$($slideElement).addClass('active-slide');        
				}
			});
		 
    }
	
	
	
$('.dropMenuList ul li a').mouseenter(function(event) {
        event.preventDefault();
        var targetDiv = $($(this).attr('href'));
        var tdiv = $(this).parent().parent().parent().next('.listMenuCategory').find('.menuChangeId');
        tdiv.hide();
        targetDiv.fadeIn();
    });
	
	
 
 
 
 
  
});
function displayMenu() {
    var menuList = $('.navbar-center > li >a');
    menuList.eq(gMenuLoop++).animate({
        top: "0",
        opacity: '1'
    }, "fast", function() {
        displayMenu();
    });
}
function removeMenu() {
    var menuList = $('.navbar-center > li >a');
    menuList.animate({
        top: "-50%",
        opacity: '0'
    }, "fast");
}
/*sidebarfix*/

$(document).ready(function($) {
    if (jQuery('body').width() > 768) {
        var $window = $(window);
        var $container = $(".leftsidebar");
        var $main = $(".stickywrap");
        var window_min = 0;
        var window_max = 0;
        var threshold_offset = 50;

        function set_limits() {
            var max_move = $main.offset().top + $main.height() - $container.height() - 2 * parseInt($container.css("top"));
            var min_move = $main.offset().top;
            $container.attr("data-min", min_move).attr("data-max", max_move);
            window_min = min_move - threshold_offset;
            window_max = max_move + $container.height() + threshold_offset;
        }
        set_limits();

        function window_scroll() {
            if ($window.scrollTop() >= window_min && $window.scrollTop() < window_max) {
                set_limits();
                container_move();
            }
        }
        $window.bind("scroll", window_scroll);

        function container_move() {
            var wst = $window.scrollTop();
            if (wst >= $container.attr("data-min") && wst <= $container.attr("data-max")) {
                var margin_top = $window.scrollTop() - $container.attr("data-min");
                $container.css("margin-top", margin_top);
            } else if (wst <= $container.attr("data-min")) {
                $container.css("margin-top", 0);
            } else if (wst > $container.attr("data-max")) {
                $container.css("margin-top", $container.attr("data-max") - $container.attr("data-min") + "px");
            }
        }
        container_move();
    }

    var nav = $('.mobileMoreView');
    var pos = nav.offset().top;
    $(window).scroll(function() {
        var fix = ($(this).scrollTop() > pos) ? true : false;
        nav.toggleClass("fix-nav", fix);
    });

});