const homeToggle = document.querySelector('#home');
const homePage = document.querySelector('#homePage');
const aboutToggle = document.querySelector('#about');
const aboutPage = document.querySelector('#aboutPage');
const resumeToggle = document.querySelector('#resume');
const resumePage = document.querySelector('#resumePage');
const portoToggle = document.querySelector('#porto');
const portoPage = document.querySelector('#portoPage');
const blogToggle = document.querySelector('#blog');
const blogPage = document.querySelector('#blogPage');
const contactToggle = document.querySelector('#contact');
const contactPage = document.querySelector('#contactPage');
const homeBut = document.querySelector('#homeBut');
const aboutBut = document.querySelector('#aboutBut');
const resumeBut = document.querySelector('#resumeBut');
const portoBut = document.querySelector('#portoBut');
const blogBut = document.querySelector('#blogBut');
const contactBut = document.querySelector('#contactBut');
const nextIcon = '<img src="./images/next.png" alt="next-arrow">';
const prevIcon = '<img src="./images/back.png" alt="back-arrow">';

var page = [homePage, aboutPage, resumePage, blogPage, portoPage, contactPage];
var button = [homeBut, aboutBut, resumeBut, blogBut, portoBut, contactBut];

homeToggle.addEventListener('click', ()=>{
    page.splice(0,1);
    button.splice(0,1);
    homePage.classList.remove('hidden');
    homeBut.classList.add('active');
    removePage(page);
    checkButton(button);
})
aboutToggle.addEventListener('click', ()=>{
    page.splice(1,1);
    button.splice(1,1);
    aboutPage.classList.remove('hidden');
    aboutBut.classList.add('active');
    removePage(page);
    checkButton(button);
})
resumeToggle.addEventListener('click', ()=>{
    page.splice(2,1);
    button.splice(2,1);
    resumePage.classList.remove('hidden');
    resumeBut.classList.add('active');
    removePage(page);
    checkButton(button);
})
portoToggle.addEventListener('click', ()=>{
    page.splice(4,1);
    button.splice(4,1);
    portoPage.classList.remove('hidden');
    portoBut.classList.add('active');
    removePage(page);
    checkButton(button);
})
blogToggle.addEventListener('click', ()=>{
    page.splice(3,1);
    button.splice(3,1);
    blogPage.classList.remove('hidden');
    blogBut.classList.add('active');
    removePage(page);
    checkButton(button);
})
contactToggle.addEventListener('click', ()=>{
    page.splice(5,1);
    button.splice(5,1);
    contactPage.classList.remove('hidden');
    contactBut.classList.add('active');
    removePage(page);
    checkButton(button);
})

function removePage(pages){
    for(var i = 0; i < pages.length; i++){
        pages[i].classList.add('hidden');
    }
    return page = [homePage, aboutPage, resumePage, blogPage, portoPage, contactPage];
}

function checkButton(buttons){
    for(var i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active');
    }
    return button = [homeBut, aboutBut, resumeBut, blogBut, portoBut, contactBut];
}

new SimpleBar(document.getElementById('aboutPage'), {
    scrollbarMinSize: 50
});


// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         margin: 10,
//         autoWidth: false,
//         nav: true,
//         dots: false,
//         navText: [
//             "<",">"
//         ],
//         responsive: {
//             0: {
//                 items: 2
//             }
//         }
//     });
// });


// $(document).ready(function(){
//     $(".owl-mine").owlCarousel({
//         margin: 10,
//         autoWidth: false,
//         items: 5,
//         nav: true,
//         dots: false,
//         navText: [
//             "<",">"
//         ],
//         responsive: {
//             0: {
//                 items: 5
//             }
//         }
//     });
// });


$(document).ready(function(){
    
    var one = $('#one');
    var two = $('#two');
    one.owlCarousel({
        margin: 10,
        autoWidth: false,
        items: 5,
        nav: true,
        dots: false,
        navText: [
            "<",">"
        ],
        responsive: {
            0: {
                items: 2
            }
        }
    });
    two.owlCarousel({
        margin: 10,
        autoWidth: false,
        items: 5,
        nav: true,
        dots: false,
        navText: [
            "<",">"
        ],
        responsive: {
            0: {
                items: 5
            }
        }
    });
})

particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});