$(document).ready(function(){


        $(".header__sidebar__btn").click(function(){ 

            $(".sidebar__body").toggleClass("sidebar__body--active");
            $(this).toggleClass("header__sidebar__btn--active");


        });
});

