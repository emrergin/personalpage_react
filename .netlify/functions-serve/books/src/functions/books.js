// functions/books.js
exports.handler = async function(event, context) {
  let books = [
    {
      link: "https://www.iz.com.tr/dorduncu-dilek",
      image: "./bookImages/dd.jpg",
      alt: "Dorduncu Dilek"
    },
    {
      link: "https://www.iz.com.tr/acziyetin-teknigi",
      image: "./bookImages/at.jpg",
      alt: "Acziyetin Tekni\u011Fi"
    },
    {
      link: "https://www.iz.com.tr/bes-kere-halil",
      image: "./bookImages/bhh.jpg",
      alt: "Be\u015F Kere Halil"
    },
    {
      link: "https://www.ketebe.com/ruh-dememi-bagislayin",
      image: "./bookImages/rdb.png",
      alt: "Ruh Dememi Ba\u011F\u0131\u015Flay\u0131n"
    }
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(books)
  };
};
//# sourceMappingURL=books.js.map
