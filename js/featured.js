const featuredContainer = document.querySelector(".featured-container");

const projects = [
  {
    link: "https://mvsic.netlify.app/",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,q_auto,w_325/v1612574160/farmers/Tabloid_-_1_1_fhc5ec.png",
    title: "MVSIC",
    desc: "This is a mvsic web app built on Spotify's API",
  },
  {
    link: "https://fbdashboard.netlify.app/",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,h_325,q_auto/v1594293164/new-portfolio-images/foodbank_u4kkcw.png",
    title: "Foodbank",
    desc:
      "A fintech investment, savings and ecommerce web app built with React, Redux and Laravel.",
  },
  {
    link: "https://docufix.com.ng",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,h_267,q_auto/v1594293143/new-portfolio-images/docufix_lbujo3.png",
    title: "Docufix",
    desc: "A document tooling web app",
  },
  {
    link: "https://misselegancenigeria.com",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/c_scale,f_auto,h_239,q_auto/v1594293153/new-portfolio-images/elegance_mfq0ap.png",
    title: "Miss Elegance",
    desc:
      "A pageantry PWA where people pay(paystack) to vote for their favorite contestants.",
  },
];

window.addEventListener("DOMContentLoaded", (e) => {
  projects.forEach((each) => {
    featuredContainer.innerHTML += `  <div class="each-project">
    <a href="${each.link}">
      <img
        src="${each.imageLink}"
        alt="${each.title}"
        width="100%"
      />
      <div class="important">${each.title}</div>
    </a>
    <p class="night-paragraph">
     ${each.desc}
    </p>
    </div>`;
  });
});
