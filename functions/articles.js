exports.handler = async function (event, context) {
  let articles = [
    {
      link: "https://link.springer.com/content/pdf/10.1007/s00199-020-01312-x.pdf",
      eng: "How to choose a fair delegation?",
      tur: "Adil bir delegasyon nasıl seçilir?",
    },
    {
      link: "https://dergipark.org.tr/en/download/article-file/2117669",
      eng: "The collective sectoral multipliers of the European Union",
      tur: "Avrupa Birliği'nin Kolektif Sektörel Çarpanları",
    },
    {
      link: "https://cris.maastrichtuniversity.nl/en/publications/strategic-voting-and-social-welfare-rules",
      eng: "Strategic voting and social welfare rules",
      tur: "Stratejik Oy Verme ve Sosyal Refah Kuralları",
    },
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articles),
  };
};
