let btns = document.querySelectorAll(".ul li");
// console.log(btns)
let galleryImgs = document.querySelectorAll(".gallery .col-sm-6.col-md-4.col-lg-3");
let arrgallery = Array.from(galleryImgs);
// console.log(arrgallery);

btns.forEach((img) => {
    img.addEventListener("click", (e) => {
        btns.forEach((img) => {
            img.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        arrgallery.forEach((ele) => {
            ele.style.display = "none"
        })
        document.querySelectorAll(e.currentTarget.dataset.cat).forEach((ele) => {
            ele.style.display = "block"
        })
    })
})

