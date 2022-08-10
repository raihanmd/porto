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

var page = [homePage, aboutPage, resumePage, blogPage, portoPage, contactPage];

homeToggle.addEventListener('click', ()=>{
    page.splice(0,1);
    homePage.classList.remove('hidden');
    removePage(page);
})
aboutToggle.addEventListener('click', ()=>{
    page.splice(1,1);
    aboutPage.classList.remove('hidden');
    removePage(page);
})
resumeToggle.addEventListener('click', ()=>{
    page.splice(2,1);
    resumePage.classList.remove('hidden');
    removePage(page);
})
portoToggle.addEventListener('click', ()=>{
    page.splice(4,1);
    portoPage.classList.remove('hidden');
    removePage(page);
})
blogToggle.addEventListener('click', ()=>{
    page.splice(3,1);
    blogPage.classList.remove('hidden');
    removePage(page);
})
contactToggle.addEventListener('click', ()=>{
    page.splice(5,1);
    contactPage.classList.remove('hidden');
    removePage(page);
})

function removePage(pages){
    for(var i = 0; i < pages.length; i++){
        console.log(pages[i]);
        pages[i].classList.add('hidden');
    }
    return page = [homePage, aboutPage, resumePage, blogPage, portoPage, contactPage];
}