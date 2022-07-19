// functions/websites.js
exports.handler = async function(event, context) {
  let websites = [
    {
      image: "./websiteImages/pru.png",
      alt: "Risk Testing",
      live: "https://emrergin.github.io/prudencetemperance/",
      code: "https://github.com/emrergin/prudencetemperance"
    },
    {
      image: "./websiteImages/atolye.png",
      alt: "Literature Workshop",
      live: "https://atolye.herokuapp.com/",
      code: "https://github.com/emrergin/atolye"
    },
    {
      image: "./websiteImages/soc.jpg",
      alt: "Voting rules",
      live: "https://emrergin.github.io/socialchoice/",
      code: "https://github.com/emrergin/socialchoice"
    },
    {
      image: "./websiteImages/czk.png",
      alt: "Etch a Sketch",
      live: "https://emrergin.github.io/etch-a-sketch/",
      code: "https://github.com/emrergin/etch-a-sketch"
    },
    {
      image: "./websiteImages/hsb.png",
      alt: "Calculator",
      live: "https://emrergin.github.io/hasib",
      code: "https://github.com/emrergin/hasib"
    }
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(websites)
  };
};
//# sourceMappingURL=websites.js.map
