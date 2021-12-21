document.querySelector(".hamburguer").addEventListener("click", ()=>
document.querySelector(".home").classList.toggle("show-menu")
); 

document.querySelector(".sidebar").addEventListener("click", ()=>
document.querySelector(".home").classList.remove("show-menu"),
document.querySelector(".home").classList.toggle("show-menu")
);  