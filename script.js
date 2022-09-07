const container = document.querySelector(".container");
const video = document.querySelector(".video");

const videoHeight = video.offsetHeight;
container.style.height = videoHeight + "px";

window.addEventListener('scroll', function () {
  if (window.scrollY > videoHeight) {
    video.classList.add("popOut-Bottom");
    video.style.bottom = -videoHeight + "px";
  } else {
    video.classList.remove("popOut-Bottom");
    video.style.bottom = 0 + "px";
  }
})


