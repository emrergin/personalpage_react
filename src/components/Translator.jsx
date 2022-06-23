const Translator = () => {
    let translations=         
    [{
        link: "https://www.hepsiburada.com/sagduyulu-yatirim-rehberi-emre-ergin-p-HBCV00000UHQYP",
        image: "../public/syr.jpg",
        alt: "The Little Book of Common Sense Investing"
    },
    {
        link: "https://rayfowler.itch.io/remnants-of-the-precursors", 
        image: "../public/rop.jpg",
        alt: "Remnants of The Precursors",
        large: true
    },
    {
        link: "https://store.steampowered.com/app/498380/AquaNimble/",
        image: "../public/an.jpg",
        alt: "AquaNimble",
        large: true
    }, 
    {
        link: "https://store.steampowered.com/app/342610/HyperRogue/",
        image: "../public/hr.png", 
        alt: "Hyper Rogue"
    },
    {
        link: "https://store.steampowered.com/app/312280/Simply_Chess",
        image: "../public/sc.jpg",
        alt: "Simply Chess",
        large: true
    },
    {
        link: "https://store.steampowered.com/app/368700/Mysterious_Space/",  
        image: "../public/ms.jpg",
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