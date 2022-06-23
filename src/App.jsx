
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import './App.css'
import myFace from '../public/proPic.png';


function App() {

  return (
   
        <div id="general" >
        <div id="welcomeText">
            <h1> 
                Hello!
            </h1>
            <h2>
                I am Emre.
            </h2>
            <h3>
                I am many things.
            </h3>   
        </div>
        <div id="mainContent">
            <div id="photoFrame">
                <img alt="My Face" src={myFace} />
            </div>
            <div id="drawer">
            
            <div className="drawerItem d1"       
             >
                <Link to="/author">An Author</Link>                  
            </div>
            <div className="drawerItem d2" 
             >                
                <Link to="/translator">A Translator</Link> 
            </div>
            <div className="drawerItem d3"  
            >                 
                <Link to="/developer">A Web Developer</Link>
            </div>
            <div className="drawerItem d4"
            > 
                <Link to="/academic">An Academic</Link>                
            </div>
            </div>
            <div id="mediaLinks">
            <a href="mailto: emrergin2757@yahoo.com" target="_blank">
                <Icon icon="mdi:email-outline"  id="icon1" align="center,slice" />        
            </a>
            <a href="https://github.com/emrergin/" target="_blank">
                <Icon icon="mdi:github" id="icon2" align="center,slice" />
            </a>
            <a href="https://twitter.com/zulmetefza" target="_blank">
                <Icon icon="mdi:twitter"  id="icon3" align="center,slice" /> 
            </a>
            <a href="https://www.goodreads.com/author/show/9244242.Emre_Ergin" target="_blank">
                <Icon icon="mdi:goodreads"   id="icon4" align="center,slice" />
            </a>
            </div>
        </div>


        </div>
  )
}

export default App
