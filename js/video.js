var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1")

	video.autoplay = false;
	video.loop = false;

	console.log("Autoplay is off");
	console.log("Looping is off");
});

/* play video button */
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

/* pause video button */
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

/* slow down button */
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Video speed is now " + video.playbackRate);
});

/* speed up button */
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.9;
	console.log("Video speed is now " + video.playbackRate);
});

/* skip ahead button */
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current video time: " + video.currentTime);
});

/* mute button */
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
	console.log("Muted:", video.muted);
});

/* volume slider */
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
	console.log("Volume: " + video.volume);
});

/* old school button */
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old school style added");
});

/* original button */
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original style added");
});


