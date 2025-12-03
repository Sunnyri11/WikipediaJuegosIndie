const contenido = document.querySelector(".contenido");
document.addEventListener("submit", function (e) {
    e.preventDefault();
    contenido.style.display = "none";
    const videoContainer = document.createElement("div");
    videoContainer.style.position = "fixed";
    videoContainer.style.top = "0";
    videoContainer.style.left = "0";
    videoContainer.style.width = "100vw";
    videoContainer.style.height = "100vh";
    videoContainer.style.zIndex = "999";
    const video = document.createElement("video");
    video.src = "Hacker.webm";
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    videoContainer.appendChild(video);
    document.body.appendChild(videoContainer);
    video.addEventListener("ended", function (e) {
        e.preventDefault()
        window.location.href = "Wiki_Juegos_Indie.html"
    })
});

