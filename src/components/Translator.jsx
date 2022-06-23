const Translator = () => {
    let translations=         
    [{
        link: "https://www.hepsiburada.com/sagduyulu-yatirim-rehberi-emre-ergin-p-HBCV00000UHQYP",
        image: "./assets//syr.jpg",
        alt: "The Little Book of Common Sense Investing"
    },
    {
        link: "https://rayfowler.itch.io/remnants-of-the-precursors", 
        image: "./assets//rop.jpg",
        alt: "Remnants of The Precursors",
        large: true
    },
    {
        link: "https://store.steampowered.com/app/498380/AquaNimble/",
        image: "./assets//an.jpg",
        alt: "AquaNimble",
        large: true
    }, 
    {
        link: "https://store.steampowered.com/app/342610/HyperRogue/",
        image: "./assets//hr.png", 
        alt: "Hyper Rogue"
    },
    {
        link: "https://store.steampowered.com/app/312280/Simply_Chess",
        image: "./assets//sc.jpg",
        alt: "Simply Chess",
        large: true
    },
    {
        link: "https://store.steampowered.com/app/368700/Mysterious_Space/",  
        image: "./assets//ms.jpg",
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