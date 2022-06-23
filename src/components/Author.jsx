const Author = () => {
    let books=[
        {link: "https://www.iz.com.tr/dorduncu-dilek",
        image: "./public/dd.jpg",
        alt: "Dorduncu Dilek"},

        {link: "https://www.iz.com.tr/acziyetin-teknigi",
        image: "./public/at.jpg",
        alt: "Acziyetin Tekniği"},

        {link: "https://www.iz.com.tr/bes-kere-halil",
        image: "./public/bhh.jpg",
        alt: "Beş Kere Halil"},

        {link: "https://www.ketebe.com/ruh-dememi-bagislayin",
        image: "./public/rdb.png", 
        alt: "Ruh Dememi Bağışlayın"}
    ];


    let collaborations = [
        {link: "https://www.ketebe.com/korkut-ata-ne-soyledi-aykut-ertugrul-guray-sungu",
        image: "./public/kans.png",
        alt:"Korkut Ata Ne Söyledi"},

        {link: "https://www.ketebe.com/ac%C3%A2ibul-mahl%C3%BBk%C3%A2t",
        image: "./public/am.png",
        alt:"Acaibül Mahlukat"},

        {link: "https://www.ketebe.com/seyyahlar-ve-kasifler-kitabi",
        image: "./public/skk.png", 
        alt:"Seyyahlar ve Kaşifler"}
    ];
        return (
            <div className="album left-of-the-grid">
                <h1 id="tabloBaslik">
                    Books
                </h1>
            {books.map((book,index) => (
                <a href={book.link} key={index}
                    target="_blank"
                    className="card">
                    <img src={book.image} alt={book.alt}/>
                </a>
            ))}
                <h1 id="tabloBaslik2">
                    Collaborations
                </h1>
            {collaborations.map((book,index) => (
                <a href={book.link} key={index}
                target="_blank"
                className="card">
                <img src={book.image} alt={book.alt}/>
            </a>
            ))}
            </div>
        // </div>
      );
}

 
export default Author;