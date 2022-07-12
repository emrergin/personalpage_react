import RiskTestSS from '../assets/pru.png';
import LiteratureSS from '../assets/atolye.png';
import VotingSS from '../assets/soc.jpg';
import SketchSS from '../assets/czk.png';
import CalcSS from '../assets/hsb.png';

import Website from './Website'

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

const Developer = () => {


    return ( <div className="album right-of-the-grid">
    <h1 id="tableHeader">
        Websites
    </h1>
    {websites.map((website,index) => (
        <Website website={website} key={index}/>
    ))}
    </div> 
    );
}
export default Developer;