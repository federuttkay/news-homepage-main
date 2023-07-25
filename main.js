const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const openNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const menuItems = document.querySelector("#menu-items");

openNav.addEventListener("click", openNavigation);
closeNav.addEventListener("click", closeNavigation);

function openNavigation() {
	menuItems.style.transform = "translateX(-70%)";
	menuItems.classList.add("box-shadow");
	openNav.classList.add("hidden");
	closeNav.classList.remove("hidden");
	wrapper.style.pointerEvents = "none";
	body.style.overflow = "hidden";
}

function closeNavigation() {
	menuItems.style.transform = "translateX(0)";
	menuItems.classList.remove("box-shadow");
	openNav.classList.remove("hidden");
	closeNav.classList.add("hidden");
	wrapper.style.pointerEvents = "all";
	body.style.overflow = "auto";
	console.log(menuItems);
}
