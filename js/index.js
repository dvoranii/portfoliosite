$(document).ready(function(){
    $(window).scrollTop(0);
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link =>{
    link.addEventListener('click',() =>{
        document.body.classList.remove('nav-open');
    })
});

let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function(){
    let input = copyText.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copyText.classList.remove("active");
    }, 2500)
});

