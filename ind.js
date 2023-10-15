
var video = document.getElementById("myvideo");
var content = document.getElementsByClassName("iop")[0];
var content1 = document.getElementsByClassName("iop")[1];
var matter = content.innerHTML;
var matter1 = content1.innerHTML;
var btn = document.getElementById("myBtn");

function pauseVideo() {
    video.pause();
    btn.innerHTML = "Play";
    content.innerHTML = matter;
    content1.innerHTML = matter1;
}

function isVideoInViewport() {
    var rect = video.getBoundingClientRect();
    return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

var observer = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) {
        pauseVideo();
    }
}, {
    root: null,
    threshold: 0.5, 
});

observer.observe(video);

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
        content.innerHTML = "";
        content1.innerHTML = "";
    } else {
        pauseVideo();
    }
}
