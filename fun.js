let menuBtn = document.querySelector('.container')
const navlinks = document.querySelector('.nav-menu')


function myFunction(x) {
  x.classList.toggle("change");
}
menuBtn.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')
})



