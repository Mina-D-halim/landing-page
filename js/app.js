 /**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
/*



/*

*/

const allsections = document.querySelectorAll('section');

const n_Menu = document.getElementById('navbar__list');

let numlist = allsections.length;

const new_Fragment =document.createDocumentFragment();
const activ_your =document.querySelectorAll('.your-active-class');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
 
 for (i=1;i<numlist;i++){
	 const nv_item=document.createElement("a");
	 nv_item.classList.add("menu__link");
	 nv_item.setAttribute("id",`m_list-${i}`);
	 nv_item.innerText=`section ${i}`;
	 nv_item.href='#sec_Link-${i}';
	 n_Menu.appendChild(v_item);
	 
	 
	 
 }
/*function createlistitem(){
	for (section of allsections){
		let sec_txt = section.getAttribute('data-nav');
		let sec_Link = section.getAttribute('id');
		 let new_li = document.createElement('li');
		//add item
		//new_li.innerHTML = `<a   class="menu__link" href="#${sec_Link}"> ${sec_txt} </a>`
		
		
		new_li.innerText = `<a  class="menu__link"  href = "#${sec_Link}"> ${sec_txt}</a>`;
		//add the item in the menu
        new_Fragment.appendChild(new_li);
         console.log(n_Menu);
  
		
	}
	  n_Menu.appendChild(new_Fragment);

}*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/
// Build menu
// Scroll to section on link click


/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (defultScroll) {
defultScroll.preventDefault();
//now giveing the smooth scroll
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});
});
});
// Set sections as active
const sectionInView = function(elem) {
const bound = elem.getBoundingClientRect();
return (
bound.top <= 50 && bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
bound.right <= (window.innerWidth || document.documentElement.clientWidth)
);
};
//looping over the sections again to find what section is active and give it the ‘your-active-class’ style
for (v = 1; v < divCounter + 1; v++) {
const vsec = document.getElementById('section' + v);
window.addEventListener('scroll', function(movingclass) {
if (sectionInView(vsec)) {
vsec.classList.add('your-active-class'); //for the active section
} else {
vsec.classList.remove('your-active-class'); //for the inactive section
}
})
false
}
//var activ_your = document.querySelectorAll("your-active-class");

/*allsections.forEach(elemn=>{
	let elm_top=elemn.getBoundingClientRect().top;
	let elm_left=elemn.getBoundingClientRect().left;
	if (elm_top>=0 && elm_left < 100)
	   if (activ_your.length < 0){
		   activ_your[0].classList.remove("your-active-class");}
 });*/
