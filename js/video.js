var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1")

	video.autoplay = false;
	video.loop = false;

	console.log("Autoplay is set to:", video.autoplay);
	console.log("Looping is set to:", video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = `${Math.round(video.volume * 100)}%`;
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(`New Speed: ${video.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= 0.9;
	console.log(`New Speed: ${video.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log(`Current Time: ${video.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function(){
	video.muted = !video.muted;
	this.textContent = video.muted ? "Unmute" : "Mute";
	console.log("Muted:", video.muted);
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value /100;
	document.querySelector("#volume").textContent = `${Math.round(video.volume * 100)}%`;
	console.log("Volume:", video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Added oldSchool class");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Removed oldSchool class");
});


