// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./sw.js")
//     .then((reg) => console.log("service worker registered"))
//     .catch((err) => console.log("service worker not registered", err));
// }

// const mybutton = document.getElementById("myBtn");
// const downButton = document.getElementById("downButton");

// const scrollFunction = () => {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//     downButton.style.display = "none";
//   } else {
//     mybutton.style.display = "none";
//     downButton.style.display = "block";
//   }
// };
// scrollFunction();
// window.onscroll = () => {
//   scrollFunction();
// };

// // When the user clicks on the button, scroll to the top of the document
// const topFunction = () => {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// };

// mybutton.addEventListener("click", topFunction);

// window.sr = ScrollReveal({
//   reset: false,
//   duration: 600,
//   easing: "cubic-bezier(.694,0,.335,1)",
//   scale: 1,
//   viewFactor: 0.3,
// });

// sr.reveal(".background");
// sr.reveal(".skills");
// sr.reveal(".introduction");
// sr.reveal(".featured-projects", { viewFactor: 0.1 });
// sr.reveal(".other-projects", { viewFactor: 0.05 });

"serviceWorker"in navigator&&navigator.serviceWorker.register("./sw.js").then(e=>console.log("service worker registered")).catch(e=>console.log("service worker not registered",e));const mybutton=document.getElementById("myBtn"),downButton=document.getElementById("downButton"),scrollFunction=()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?(mybutton.style.display="block",downButton.style.display="none"):(mybutton.style.display="none",downButton.style.display="block")};scrollFunction(),window.onscroll=(()=>{scrollFunction()});const topFunction=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0};mybutton.addEventListener("click",topFunction),window.sr=ScrollReveal({reset:!1,duration:600,easing:"cubic-bezier(.694,0,.335,1)",scale:1,viewFactor:.3}),sr.reveal(".background"),sr.reveal(".skills"),sr.reveal(".introduction"),sr.reveal(".featured-projects",{viewFactor:.1}),sr.reveal(".other-projects",{viewFactor:.05});