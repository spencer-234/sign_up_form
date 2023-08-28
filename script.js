const rootElement = document.documentElement;
const logoImg = document.querySelector(".logo_img");
const citation = document.querySelector(".citation");

rootElement.classList.add("dark");

function light() {
    rootElement.classList.remove("dark");
    rootElement.classList.add("light");
}

function dark() {
    rootElement.classList.remove("light");
    rootElement.classList.add("dark");
}

