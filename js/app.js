// Variables
const navMenu = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));
const burger = document.querySelector('.burger');

// build the navList items
function createListItem(){
    for (sec of sections){
        secName = sec.getAttribute('data-nav');
        secLink = sec.getAttribute('id');
        listItem = document.createElement('li');
        listItem.innerHTML = `<a data-nav='${secLink}' class='menu__link'>${secName}</a>`;
        navMenu.appendChild(listItem);
    }
}

createListItem();

//styling active window
window.onscroll = function activeClass() {
    document.querySelectorAll("section").forEach(function(active) {
        let actList = navMenu.querySelector(`[data-nav=${active.id}]`)
        if(active.getBoundingClientRect().top <=100 && active.getBoundingClientRect().top>=-600 )
        {
// Add class 'active' to section when near top of viewport
           active.classList.add("your-active-class")  ;
           actList.classList.add('activeList');
        }else {
          active.classList.remove("your-active-class");
          actList.classList.remove('activeList');
        }
    });
};

navMenu.addEventListener('click',function(event) {
    // This prevernts the default behavior
    event.preventDefault(); 
    console.log(event);
    if (event.target.dataset.nav) {
        document.getElementById(event.target.dataset.nav).scrollIntoView({behavior:"smooth"});
    }
})


//up Button

const upTop = document.getElementById('upTotop');
// click event to go to the top of page
upTop.addEventListener("click", function() {
    window.scrollTo({ top });
});


// burger Button
burger.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
})












