$(".carousel-depoimento").owlCarousel({
    loop:true,
    margin:25,  
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    nav:true,
    navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1024:{
            items: 3,
        },
    }
})