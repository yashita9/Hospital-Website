let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}

//preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

//FAQ
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const toggle = question.querySelector('.toggle');
    const answer = question.nextElementSibling;

    question.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});

//carousel
// $(document).ready(function(){
// $(".carousel").owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//       0:{
//         items:1,
//         nav: false
//       },
//       600:{
//         items:2,
//         nav: false
//       },
//       1000:{
//         items:3,
//         nav: false
//       }
//     }
//   });
//   });


