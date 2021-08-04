let viaWeb = false;
let anim1 = new gsap.timeline({ repeat: -1, yoyo: true, repeatRefresh: true }).to('.line-svg line', { scaleY: gsap.utils.random([0.1, 0.5, 1, 1.2, 1.5, 1.8], true) })
anim1.pause();

$('#play-stream').click(function () {
    if (viaWeb) {
        startStream()
    } 
    else { 
        $('.modal-play').removeClass('d-none') 
    }
})

function startStream() {
    viaWeb = true    
    playVideo();
}

$('#pause-stream').click(function () {
    
    stopVideo();
})

$(document).ready(function () {
    gsap.to('.first', 1.5, {
        delay: .2,
        left: '-100%',
        ease: Expo.easeInOut
    })

    gsap.to('.second', 1.5, {
        delay: .4,
        left: '-100%',
        ease: Expo.easeInOut
    })

    gsap.to('.third', 1.5, {
        delay: .6,
        left: '-100%',
        ease: Expo.easeInOut
    })
});
$('.list-dj').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});