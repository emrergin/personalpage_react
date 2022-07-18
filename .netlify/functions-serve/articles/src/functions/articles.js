// functions/articles.ts
exports.handler = async function(event, context) {
  let articles = [
    {
      link: "https://link.springer.com/content/pdf/10.1007/s00199-020-01312-x.pdf",
      eng: "How to choose a fair delegation?",
      tur: "Adil bir delegasyon nas\u0131l se\xE7ilir?"
    },
    {
      link: "https://dergipark.org.tr/en/download/article-file/2117669",
      eng: "The collective sectoral multipliers of the European Union",
      tur: "Avrupa Birli\u011Fi'nin Kolektif Sekt\xF6rel \xC7arpanlar\u0131"
    },
    {
      link: "https://cris.maastrichtuniversity.nl/en/publications/strategic-voting-and-social-welfare-rules",
      eng: "Strategic voting and social welfare rules",
      tur: "Stratejik Oy Verme ve Sosyal Refah Kurallar\u0131"
    }
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(articles)
  };
};
//# sourceMappingURL=articles.js.map
