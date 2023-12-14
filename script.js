const lightToggle = document.querySelector(".light");
const darkToggle = document.querySelector(".dark");
const nextImage =  document.querySelector(".right");
const prevImage =  document.querySelector(".left");
const label = document.getElementById('counter');
const image = document.getElementById('avatar');
var index = 0;
const images = ["images/Avatar1.png", "images/Avatar2.png", "images/Avatar3.png"];

lightToggle.addEventListener('click', () => {
    if (document.body.classList.contains("dark-mode-variables")){
        document.body.classList.toggle("dark-mode-variables");
        darkToggle.classList.toggle("active");
        lightToggle.classList.toggle("active");
    }
})

darkToggle.addEventListener('click', () => {
    if (!document.body.classList.contains("dark-mode-variables")){
        document.body.classList.toggle("dark-mode-variables");
        darkToggle.classList.toggle("active");
        lightToggle.classList.toggle("active");
    }
})

nextImage.addEventListener('click', () => {
    if (index + 1 < images.length){
        index += 1;
        image.src = images[index];
        label.innerHTML = (index+1).toString() + "/" + images.length.toString();
    } 
})

prevImage.addEventListener('click', () => {
    if (index > 0){
        index -= 1;
        image.src = images[index];
        label.innerHTML = (index+1).toString() + "/" + images.length.toString();
    } 
})