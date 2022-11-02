// functions/affiliations.js
exports.handler = async function(event, context) {
  let affiliations = [
    {
      link: "http://www.ibu.edu.tr/en",
      eng: "Bolu Abant Izzet Baysal University",
      tur: "Bolu Abant \u0130zzet Baysal \xDCniversitesi"
    },
    {
      link: "https://www.maastrichtuniversity.nl/",
      eng: "Maastricht University",
      tur: "Maastricht \xDCniversitesi"
    },
    {
      link: "https://www.uni-corvinus.hu/?lang=en/",
      eng: "Corvinus University",
      tur: "Corvinus \xDCniversitesi"
    },
    {
      link: "https://w3.bilkent.edu.tr/bilkent/",
      eng: "Bilkent University",
      tur: "Bilkent \xDCniversitesi"
    },
    {
      link: "https://www.etu.edu.tr/en/",
      eng: "TOBB University of Economics & Technology",
      tur: "TOBB Ekonomi ve Teknoloji \xDCniversitesi"
    }
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(affiliations)
  };
};
//# sourceMappingURL=affiliations.js.map
