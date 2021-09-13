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

function copy() {
    var copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  
document.querySelector("#copy").addEventListener("click", copy);

function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
  }