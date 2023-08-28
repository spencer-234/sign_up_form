const rootElement = document.documentElement;
const citation1 = document.querySelector(".citation1");
const citation2 = document.querySelector(".citation2");

rootElement.classList.add("dark");

function light() {
    rootElement.classList.remove("dark");
    rootElement.classList.add("light");
    citation1.setAttribute("style", "display: none");
    citation2.setAttribute("style", "display: block");
    
}

function dark() {
    rootElement.classList.remove("light");
    rootElement.classList.add("dark");
    citation1.setAttribute("style", "display: block");
    citation2.setAttribute("style", "display: none");
}

