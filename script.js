let searchBtn=document.querySelector('#search-btn');

let searchBar=document.querySelector('.search-bar-container');
let form=document.querySelector('.form');
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
// let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
videoBtn = document.querySelectorAll('.vid-btn');


searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// formBtn.addEventListener('click',()=>{
//    loginForm.classList.toggle('fa-times');
//     searchBar.classList.toggle('active');
// });

// menu.addEventListener('click',()=>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// })

// formBtn.addEventListener('click',()=>{
//    formBtn.classList.toggle('fa-times');
//    form.classList.toggle('active');
// });

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    // menu.classList.remove('fa-times');
    navbar.classList.remove('active');
loginForm.classList.remove('active');
}
 formBtn.addEventListener('click',()=>{
     loginForm.classList.add('active');
    });
//     // loginForm.classList.toggle('fa-times');
//     // loginForm.classList.toggle('active');

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
});


    
