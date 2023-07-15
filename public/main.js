AOS.init({
    // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});




//Año del footer
const year = new Date().getFullYear();
document.getElementById('year').innerHTML ='Andrei Chiorian - Full Stack Developer '+ year;

//Nav bar sticky

window.addEventListener('scroll', function(){
    var header = document.querySelector("header");    
    header.classList.toggle("top-0", window.scrollY > 0);      
    header.classList.toggle("md:p-6", window.scrollY == 0);
    header.classList.toggle("md:p-1", window.scrollY > 0);
    header.classList.toggle("md:text-lg", window.scrollY > 0);                
});

//Toggle dark/light

document.querySelector('label').addEventListener('click',  (e) => {
    document.querySelector('body').classList.toggle('from-sky-900');
    document.querySelector('body').classList.toggle('to-indigo-950');
    document.querySelector('body').classList.toggle('from-sky-100');
    document.querySelector('body').classList.toggle('to-sky-950');

    document.querySelector('header').classList.toggle('bg-sky-900');
    document.querySelector('header').classList.toggle('bg-sky-100');
    document.querySelector('header').classList.toggle('border-b-sky-600');
    document.querySelector('header').classList.toggle('border-b-sky-200');
    document.querySelector('header').classList.toggle('shadow-white');
    document.querySelector('header').classList.toggle('shadow-black');    
 
    document.querySelector('footer').classList.toggle('bg-indigo-950');
    document.querySelector('footer').classList.toggle('bg-sky-950');
    document.querySelector('footer').classList.toggle('border-t-indigo-800');
    document.querySelector('footer').classList.toggle('border-t-sky-800');    

    var toggles = document.querySelectorAll('.toggle-text');
    toggles.forEach(element => {
        element.classList.toggle("text-white");
    });

    var bubbles = document.querySelectorAll('.burbuja');
    bubbles.forEach(element => {
        element.classList.toggle('bg-opacity-10');
        element.classList.toggle('bg-opacity-30');        
    });
})


//Efecto cursor


const conteDegradado = document.getElementById('cursor');
const sizeDegradado = 150;

conteDegradado.style.background = `radial-gradient(circle at 40px 40px, rgba(200, 200, 200, 0.1) 3%, transparent 30% ${sizeDegradado}px)`
// alert(conteDegradado.style.position);
conteDegradado.addEventListener('mousemove', (e) => {
    
    const x = e.clientX
    const y = e.clientY   
    console.log(x, y)
    conteDegradado.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 200, 200, 0.1) 3%, transparent 30% ${sizeDegradado}px)`
    
})


// Gradiente circular del inicio
// const fadeInit = document.getElementById('fadeInit');
// fadeInit.style.background = `radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 3%, black 50%)`;


// //Maquina de escribir inicio

// let name = document.getElementById('name');
// let strName = name.innerHTML;

// let ocupa = document.getElementById('ocupa');
// let strOcupa = ocupa.innerHTML;

// name.innerHTML = "";
// ocupa.innerHTML = "";

// let speed = 120;
// let i = 0;
// let u = 0;



// function typeWritter(){
//     if (i < strName.length) {
//         name.innerHTML += strName.charAt(i);
//         i++;
//         setTimeout(typeWritter, speed);
//     }    
// }

// setTimeout(typeWritter, speed);

// function ocupaWritter(){
//     if (u < strOcupa.length) {
//         ocupa.innerHTML += strOcupa.charAt(u);
//         u++;
//         setTimeout(ocupaWritter, 80);
//     }   
// }

// setTimeout(ocupaWritter, 1800);








 
