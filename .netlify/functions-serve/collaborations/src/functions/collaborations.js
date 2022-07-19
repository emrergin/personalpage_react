// functions/collaborations.js
exports.handler = async function(event, context) {
  let collaborations = [
    {
      link: "https://www.ketebe.com/korkut-ata-ne-soyledi-aykut-ertugrul-guray-sungu",
      image: "./bookImages/kans.png",
      alt: "Korkut Ata Ne S\xF6yledi"
    },
    {
      link: "https://www.ketebe.com/ac%C3%A2ibul-mahl%C3%BBk%C3%A2t",
      image: "./bookImages/am.png",
      alt: "Acaib\xFCl Mahlukat"
    },
    {
      link: "https://www.ketebe.com/seyyahlar-ve-kasifler-kitabi",
      image: "./bookImages/skk.png",
      alt: "Seyyahlar ve Ka\u015Fifler"
    }
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(collaborations)
  };
};
//# sourceMappingURL=collaborations.js.map
