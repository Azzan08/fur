
const bgImage = document.getElementById("banner")

window.addEventListener("scroll",()=>{
    updateImage();
})

function updateImage(){
    bgImage.style.opacity=1-window.scrollY / 900;
    //bgImage.style.backgroundSize=160 - window.scrollY / 12  + "%";
}

