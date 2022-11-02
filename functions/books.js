exports.handler = async function (event, context) {
  let books = [
    {
      link: "https://www.iz.com.tr/dorduncu-dilek",
      image: "./bookImages/dd.jpg",
      alt: "Dorduncu Dilek",
    },

    {
      link: "https://www.iz.com.tr/acziyetin-teknigi",
      image: "./bookImages/at.jpg",
      alt: "Acziyetin Tekniği",
    },

    {
      link: "https://www.iz.com.tr/bes-kere-halil",
      image: "./bookImages/bhh.jpg",
      alt: "Beş Kere Halil",
    },

    {
      link: "https://www.ketebe.com/ruh-dememi-bagislayin",
      image: "./bookImages/rdb.png",
      alt: "Ruh Dememi Bağışlayın",
    },
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(books),
  };
};
