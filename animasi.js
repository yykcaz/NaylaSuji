var videos2 = document.querySelectorAll(".bergulir2");
videos2.forEach(function(video2) {
    video2.addEventListener('loadedmetadata', function() {
        this.currentTime = this.duration / 10000;
    }, false);
    video2.style.animation = "scroll 7s linear infinite";
});