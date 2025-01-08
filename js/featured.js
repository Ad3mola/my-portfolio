const featuredContainer = document.querySelector(".featured-container");

const projects = [
  {
    link: "https://deelaa.travel/",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/q_auto:low/v1736340937/Group_7_owhre4.webp",
    title: "Deelaa Travel",
    desc: "A web application for seamless flight booking, offering users the ability to search, compare, and book flights online with ease.",
  },
  {
    link: "https://instantplay.goldbar.games/#/login",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/q_auto:low/03-Mockup_etovko.webp",
    title: "Goldbar Games",
    desc: "A revenue sharing NFT collection with a decentralised gaming platform on the solana blockchain",
  },
  {
    link: "https://elfrique.com",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/q_auto:low/04-Mockup_akt2nf.webp",
    title: "Elfrique",
    desc: "Elfrique is an innovative and complete goal-oriented company, which is into event management services such as event ticketing, voting contest management, trivia management system, event vendor management system, event forms management system and travel & tours management services.",
  },
   {
    link: "https://hertechchoice.com/",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/q_auto:low/1-Mockup_ae4w6k.webp",
    title: "Hertechchoice",
    desc: "Her Tech Choice is a 6-Weeks virtual bootcamp for ladies who are interested in software development. It is an avenue to network and collaborate with other participants with the same drive and vision.",
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
