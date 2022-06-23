import RiskTestSS from '../assets/pru.png';
import LiteratureSS from '../assets/atolye.png';
import VotingSS from '../assets/soc.jpg';
import SketchSS from '../assets/czk.png';
import CalcSS from '../assets/hsb.png';

const Developer = () => {

    let websites= [
        {
            image: RiskTestSS,
            alt: "Risk Testing",
            live: "https://emrergin.github.io/prudencetemperance/",
            code: "https://github.com/emrergin/prudencetemperance"
        },                
        {
            image: LiteratureSS,		
            alt: "Literature Workshop",
            live: "https://atolye.herokuapp.com/",
            code: "https://github.com/emrergin/atolye"
        },

        {
            image: VotingSS,
            alt: "Voting rules",
            live: "https://emrergin.github.io/socialchoice/",
            code: "https://github.com/emrergin/socialchoice"
        },
        {
            image: SketchSS,
            alt: "Etch a Sketch",
            live: "https://emrergin.github.io/etch-a-sketch/",
            code: "https://github.com/emrergin/etch-a-sketch"
        },
            
        {
            image: CalcSS,
            alt: "Calculator",
            live: "https://emrergin.github.io/hasib",
            code: "https://github.com/emrergin/hasib"
        }
    ];
    return ( <div className="album right-of-the-grid">
    <h1 id="tabloBaslik">
        Websites
    </h1>
    {websites.map((website,index) => (
    <div className="card2" key={index}>
        <img src={website.image} alt={website.alt}/>
        <div className="cardText">  
            <a href={website.live}
            target="_blank"
            >
                Link
            </a>
            <a href={website.code}
            target="_blank"
            >
                Repo
            </a>
        </div>
    </div> 
    ))}
    </div> 
    );
}
export default Developer;