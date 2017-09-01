var link = document.querySelector(".write-us"),
  popup = document.querySelector(".modal-write"),
  close = popup.querySelector(".modal-content-close"),
  form = popup.querySelector("form"),
  login = popup.querySelector("[name=username]"),
  email = popup.querySelector("[name=email]"),
  comment = popup.querySelector("[name=comment]"),
  storage = localStorage.getItem("login");
link.addEventListener("click", function(e) {
  e.preventDefault(),
  popup.classList.add("modal-write-show"),
  storage ? (login.value = storage, email.focus()) : login.focus()
}),
close.addEventListener("click", function(e) {
  e.preventDefault(), popup.classList.remove("modal-write-show"), popup.classList.remove("modal-error")
}), form.addEventListener("submit", function(e) {
  login.value && email.value && comment.value ? localStorage.setItem("login", login.value) : (e.preventDefault(), popup.classList.remove("modal-error"), popup.offsetWidth = popup.offsetWidth, popup.classList.add("modal-error"))
}), window.addEventListener("keydown", function(e) {
  27 === e.keyCode && popup.classList.contains("modal-write-show") && (popup.classList.remove("modal-write-show"), popup.classList.remove("modal-error"))
});
var mapOpen = document.querySelector(".js-open-map"),
  mapPopup = document.querySelector(".modal-content-map"),
  mapClose = mapPopup.querySelector(".modal-content-close");
mapOpen.addEventListener("click", function(e) {
  e.preventDefault(), mapPopup.classList.add("modal-content-show")
}), mapClose.addEventListener("click", function(e) {
  e.preventDefault(), mapPopup.classList.remove("modal-content-show")
}), window.addEventListener("keydown", function(e) {
  27 === e.keyCode && mapPopup.classList.contains("modal-content-show") && mapPopup.classList.remove("modal-content-show")
});
var buy = document.querySelector(".js-item-buy"),
  basket = document.querySelector(".modal-basket-show"),
  basketClose = basket.querySelector(".modal-content-close");
buy.addEventListener("click", function(e) {
  e.preventDefault(), basket.classList.add("modal-basket")
}), basketClose.addEventListener("click", function(e) {
  e.preventDefault(), basket.classList.remove("modal-basket")
}), window.addEventListener("keydown", function(e) {
  27 === e.keyCode && basket.classList.contains("modal-basket") && basket.classList.remove("modal-basket")
});
