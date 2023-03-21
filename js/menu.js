let menu_btn = document.querySelector(".menu_btn");
let menu_wrapper = document.querySelector(".mobile_navigation nav ul");
let menu_icon = document.querySelector(".fa-bars");

menu_btn.addEventListener("click", () => {
  menu_wrapper.classList.toggle("activemenu");
  menu_icon.classList.toggle("fa-bars");
  menu_icon.classList.toggle("fa-xmark");
  console.log(menu_wrapper);
  console.log(menu_icon);
});
