import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import myFace from "../assets/proPic.png";
import { useRef, useEffect } from "react";

import { useStateValue } from "../state";
import "./Menu.css";

function Menu({linkFunction}:{linkFunction:()=>void}) {
  const [{ isTurkish }] = useStateValue();
  const welcomeText1 = useRef<HTMLHeadingElement>(null);
  const welcomeText2 = useRef<HTMLHeadingElement>(null);

  useEffect(()=>{
    setTimeout(() =>{
        welcomeText1.current?.classList.add(`welcome`);
    }, 1000);
    setTimeout(() =>{
        welcomeText2.current?.classList.add(`welcome`);
    }, 2500);

  },[]);
  return (
    <div id="general">
      <div id="welcomeText">
        <h1>{isTurkish ? `Selam!` : `Hello!`}</h1>
        <h2 ref={welcomeText1} className="welcome-invisible-ltr">{isTurkish ? `Ben Emre.` : `I am Emre.`}</h2>
        <h3 ref={welcomeText2} className="welcome-invisible-rtl">{isTurkish ? `Aşağıdakilerin hepsiyim.` : `I am many things.`}</h3>
      </div>
      <div id="mainContent">
        <div id="photoFrame">
          <img alt="My Face" src={myFace} />
        </div>
        <div id="drawer">
          <div className="drawerItem d1">
            <Link to="/author" onClick={()=>linkFunction()}>{isTurkish ? `Yazar` : `An Author`}</Link>
          </div>
          <div className="drawerItem d2">
            <Link to="/translator"   onClick={()=>linkFunction()}>
              {isTurkish ? `Çevirmen` : `A Translator`}
            </Link>
          </div>
          <div className="drawerItem d3">
            <Link to="/developer"  onClick={()=>linkFunction()}>
              {isTurkish ? `Web Geliştiricisi` : `A Web Developer`}
            </Link>
          </div>
          <div className="drawerItem d4">
            <Link to="/academic" onClick={()=>linkFunction()}>
              {isTurkish ? `Akademisyen` : `An Academic`}
            </Link>
          </div>
        </div>
        <div id="mediaLinks">
          <a href="mailto: emrergin2757@yahoo.com" target="_blank">
            <Icon icon="mdi:email-outline" id="icon1" align="center,slice" />
          </a>
          <a href="https://github.com/emrergin/" target="_blank">
            <Icon icon="mdi:github" id="icon2" align="center,slice" />
          </a>
          <a
            href="https://www.goodreads.com/author/show/9244242.Emre_Ergin"
            target="_blank"
          >
            <Icon icon="mdi:goodreads" id="icon4" align="center,slice" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
