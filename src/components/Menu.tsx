import { Icon } from "@iconify/react";

import myFace from "../assets/proPic.png";
import { useRef, useEffect } from "react";

import { useStateValue } from "../state";
import { useLocation } from "react-router-dom";
import "./Menu.css";

import LinkWrap from "./LinkWrap";

function Menu({ linkFunction }: { linkFunction: () => void }) {
  const [{ isTurkish }] = useStateValue();
  const welcomeText1 = useRef<HTMLHeadingElement>(null);
  const welcomeText2 = useRef<HTMLHeadingElement>(null);

  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      welcomeText1.current?.classList.add(`welcome`);
    }, 1000);
    setTimeout(() => {
      welcomeText2.current?.classList.add(`welcome`);
    }, 2500);
  }, []);
  return (
    <div id="general">
      <div id="welcomeText">
        <h1>{isTurkish ? `Selam!` : `Hello!`}</h1>
        <h2 ref={welcomeText1} className="welcome-invisible-ltr">
          {isTurkish ? `Ben Emre.` : `I am Emre.`}
        </h2>
        <h3 ref={welcomeText2} className="welcome-invisible-rtl">
          {isTurkish ? `Aşağıdakilerin hepsiyim.` : `I am many things.`}
        </h3>
      </div>
      <div id="mainContent">
        <div id="photoFrame">
          <img alt="My Face" src={myFace} />
        </div>
        <div id="drawer">
          <LinkWrap
            drawerNumber={1}
            destination="/author"
            linkFunction={linkFunction}
          >
            {isTurkish ? `Yazar` : `An Author`}
          </LinkWrap>
          <LinkWrap
            drawerNumber={2}
            destination="/translator"
            linkFunction={linkFunction}
          >
            {isTurkish ? `Çevirmen` : `A Translator`}
          </LinkWrap>
          <LinkWrap
            drawerNumber={3}
            destination="/developer"
            linkFunction={linkFunction}
          >
            {isTurkish ? `Web Geliştiricisi` : `A Web Developer`}
          </LinkWrap>
          <LinkWrap
            drawerNumber={4}
            destination="/academic"
            linkFunction={linkFunction}
          >
            {isTurkish ? `Akademisyen` : `An Academic`}
          </LinkWrap>
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
