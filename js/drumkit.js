const drumKeys = Array.from(document.querySelectorAll(".drumKey"));

const removePlaying = function (event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
};

const drumPlay = function (event) {
  const key = document.querySelector(`.drumKey[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(
    `.drumSound[data-key="${event.keyCode}"]`
  );
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

function init() {
  drumKeys.forEach((key) =>
    key.addEventListener("transitionend", removePlaying)
  );
  window.addEventListener("keydown", drumPlay);
}

init();
