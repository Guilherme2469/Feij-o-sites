

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));