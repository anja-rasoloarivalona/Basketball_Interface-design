$(document).ready(function(){


        $(".header__sidebar__btn").click(function(){ 

            $(".sidebar__body").toggleClass("sidebar__body--active");
            $(this).toggleClass("header__sidebar__btn--active");


        });

        $(window).scroll(function() {
            if($(document).scrollTop() > 10) {
                 $('.header').addClass('header--scroll');
                 $('.header__sidebar__btn__hamburger').addClass('header--scroll__btn');
                 $('.header__icon').addClass('header--scroll__icon');
                 $('.header__items').addClass('header--scroll__items');
            }
            else {
                $('.header').removeClass('header--scroll');
                $('.header__sidebar__btn__hamburger').removeClass('header--scroll__btn');
                $('.header__icon').removeClass('header--scroll__icon');
                $('.header__items').removeClass('header--scroll__items');
            }
        });
});


