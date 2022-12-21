const featuredContainer = document.querySelector(".featured-container");

const projects = [
  {
    link: "https://hertechchoice.com/",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/v1671636406/1-Mockup_ae4w6k.png",
    title: "Hertechchoice",
    desc: "Her Tech Choice is a 6-Weeks virtual bootcamp for ladies who are interested in software development. It is an avenue to network and collaborate with other participants with the same drive and vision.",
  },
  {
    link: "https://www.goldbar.games/",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/v1671636401/03-Mockup_etovko.png",
    title: "Goldbar Games",
    desc: "A revenue sharing NFT collection with a decentralised gaming platform on the solana blockchain",
  },
  {
    link: "https://elfrique.com",
    imageLink:
      "https://res.cloudinary.com/ademolamadelewi/image/upload/v1671636400/04-Mockup_akt2nf.png",
    title: "Elfrique",
    desc: "Elfrique is an innovative and complete goal-oriented company, which is into event management services such as event ticketing, voting contest management, trivia management system, event vendor management system, event forms management system and travel & tours management services.",
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
