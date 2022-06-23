import commonSenseCover from '../assets/syr.jpg';
import RemnantsCover from '../assets/rop.jpg';
import AquaCover from '../assets/an.jpg';
import RogueCover from '../assets/hr.png';
import ChessCover from '../assets/sc.jpg';
import SpaceCover from '../assets/ms.jpg';

const Translator = () => {

let translations=         
    [{
        link: "https://www.hepsiburada.com/sagduyulu-yatirim-rehberi-emre-ergin-p-HBCV00000UHQYP",
        image: commonSenseCover,
        alt: "The Little Book of Common Sense Investing"
    },
    {
        link: "https://rayfowler.itch.io/remnants-of-the-precursors", 
        image: RemnantsCover,
        alt: "Remnants of The Precursors",
        large: true
    },
    {
        link: "https://store.steampowered.com/app/498380/AquaNimble/",
        image: AquaCover,
        alt: "AquaNimble",
        large: true
    }, 
    {
        link: "https://store.steampowered.com/app/342610/HyperRogue/",
        image: RogueCover, 
        alt: "Hyper Rogue"
    },
    {
        link: "https://store.steampowered.com/app/312280/Simply_Chess",
        image: ChessCover,
        alt: "Simply Chess",
        large: true
    },
    {
        link: "https://store.steampowered.com/app/368700/Mysterious_Space/",  
        image: SpaceCover,
        alt: "Mysterious Space",
        large: true
    }];

    return ( <div className="album left-of-the-grid">
    <h1 id="tabloBaslik">
        Works
    </h1>
    {translations.map((translation,index) => (
    <a href={translation.link} key={index}
        target="_blank"
        className="card"
        >
        <img src={translation.image} alt={translation.alt}
        className={translation.large? "genisImg" : ""}
        />
    </a>
    ))
    }
    </div> 
    );
}
 
export default Translator;