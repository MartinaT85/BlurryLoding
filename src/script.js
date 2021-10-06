const loadTxt = document.querySelector(".loading-txt");

const image = document.querySelector(".bg");

let load = 0;
let interval = setInterval(blur, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function blur() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }

  loadTxt.innerHTML = `${load}%`;
  loadTxt.style.opacity = scale(load, 0, 100, 1, 0);
  image.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
