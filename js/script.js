const hiddenImgs = document.querySelectorAll("figure.hidden");
const imgCollection2 = document.querySelectorAll("a[loading='lazy']");
const loadBtn = document.querySelector("#load-btn");

document.querySelector("#load-btn").addEventListener('click', toggleHidden);

function toggleHidden() {
  for (const el of hiddenImgs) {
    el.classList.remove('hidden');
  }
  for (const el of imgCollection2){
    el.setAttribute("data-lightbox", "gallery");
  }
  loadBtn.classList.add('hidden');
}
