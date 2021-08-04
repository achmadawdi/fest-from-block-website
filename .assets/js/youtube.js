
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'B43lQTLA1oQ',
        autoplau: false,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {    
    if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        stopVideo();
    }else if((event.data == YT.PlayerState.PLAYING)){
        playVideo();
    }
}
function stopVideo() {     
    player.pauseVideo();
    $('#play-stream').addClass('active')
    $('.line-svg').css('opacity', 0.5)
    $('#pause-stream').css('display', 'none')
    $('#pause-stream').removeClass('active')    
    anim1.pause();
}

function playVideo() { 
    $('#play-stream').css('display', 'none')
    $('#play-stream').removeClass('active')
    $('#pause-stream').addClass('active')
    $('.line-svg').css('opacity', 1)
    $('.modal-play').addClass('d-none');
    $('.video-player').removeClass('d-none');
    anim1.play();   
    player.playVideo();
}

function minimizeVideo(x) {
    $('.video-player').removeClass('active');
    $(x).addClass("d-none");
    gsap.to('#player', 1, {        
        width: "0px",
        height: "0px",        
        ease: Expo.easeInOut
    })
    gsap.to('.video-player', 1,{
        delay: 1,
        bottom: "100px",
        right: "0px",
        left: "unset",
        marginLeft : "0px",
        top: "90%",
        marginTop: "0px",
        marginRight: "15px",
        height: "50px",
        padding: "10px",
        ease: Expo.easeInOut
    })
    $('#open-video').removeClass('d-none');    
}

function maximizeVideo(x) {
    $('.video-player').addClass('active');
    $(x).addClass("d-none");
    gsap.to('#player', 1, {        
        delay: 1,
        width: "640px",
        height: "390px",        
        ease: Expo.easeInOut
    })
    gsap.to('.video-player', 1,{        
        left: "50%",
        marginLeft : "-330px",
        top: "50%",
        marginTop: "-300px",        
        height: "auto",
        padding: "20px 10px",
        marginRight: "unset",
        bottom: "unset",
        right: "unset",
        ease: Expo.easeInOut
    })
    $('#minim-video').removeClass('d-none');    
}