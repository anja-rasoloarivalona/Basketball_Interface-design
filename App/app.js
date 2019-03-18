$(document).ready(function(){


        $(".sidebar__btn").click(function(){ 

            $(".sidebar__body").toggleClass("sidebar__body--active");
            $(this).toggleClass("sidebar__btn--active");


        });
});

