$('.one').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    
    responsive:{
        325:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

$('.two').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:false,
    dots:true,


    

    responsive:{
        425:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

