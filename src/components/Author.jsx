import acziyetinTeknigiCover from '../assets/at.jpg';
import dorduncuDilekCover from '../assets/dd.jpg';
import besKereHalilCover from '../assets/bhh.jpg';
import ruhDememiBagislayinCover from '../assets/rdb.png';
import korkutAtaCover from '../assets/kans.png';
import mahlukatCover from '../assets/am.png';
import kasifCover from '../assets/skk.png';
import LinkedImage from './LinkedImage'

let books=[
    {link: "https://www.iz.com.tr/dorduncu-dilek",
    image: dorduncuDilekCover,
    alt: "Dorduncu Dilek"},

    {link: "https://www.iz.com.tr/acziyetin-teknigi",
    image: acziyetinTeknigiCover,
    alt: "Acziyetin Tekniği"},

    {link: "https://www.iz.com.tr/bes-kere-halil",
    image: besKereHalilCover,
    alt: "Beş Kere Halil"},

    {link: "https://www.ketebe.com/ruh-dememi-bagislayin",
    image: ruhDememiBagislayinCover, 
    alt: "Ruh Dememi Bağışlayın"}
];


let collaborations = [
    {link: "https://www.ketebe.com/korkut-ata-ne-soyledi-aykut-ertugrul-guray-sungu",
    image: korkutAtaCover,
    alt:"Korkut Ata Ne Söyledi"},

    {link: "https://www.ketebe.com/ac%C3%A2ibul-mahl%C3%BBk%C3%A2t",
    image: mahlukatCover,
    alt:"Acaibül Mahlukat"},

    {link: "https://www.ketebe.com/seyyahlar-ve-kasifler-kitabi",
    image: kasifCover, 
    alt:"Seyyahlar ve Kaşifler"}
];

const Author = () => {
    
    return (
            <div className="album left-of-the-grid">
                <h1 id="tableHeader">
                    Books
                </h1>
            {books.map((book,index) => (
                <LinkedImage key={index} book={book}/>
            ))}
                <h1 id="tableHeader2">
                    Collaborations
                </h1>
            {collaborations.map((book,index) => (
                <LinkedImage key={index} book={book}/>
            ))}
            </div>
      );
}

 
export default Author;