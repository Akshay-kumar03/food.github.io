$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:780,
                settings:{
                    slidesToShow:1
                }
            }

        ]
    });
})

// $('.food-slider').owlCarousel({
//         loop:true,
//         autoplay:true,
//         autoplayTimeout:3000,
//         responsive: responsive
//     });

const trigger = document.querySelector('.nav-trigger');
const site = document.querySelector('.site-content-wrapper');

trigger.addEventListener('click',()=>{
    site.classList.toggle('scaled');
})