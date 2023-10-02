const wrapper = document.querySelector(".wrapper");
const barsIcon = document.querySelector("#bars");
const closeIcon = document.querySelector(".icon-close");



function openWrapper() {
  wrapper.style.display = "flex";
  closeIcon.style.display = "flex";
  barsIcon.style.display = "none";
}

function closeWrapper() {
  wrapper.style.display = "none"
  closeIcon.style.display = "none"
  barsIcon.style.display = "flex"
}




