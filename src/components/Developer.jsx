

import Website from './Website'
import axios from 'axios'
import { useEffect,useState } from 'react';


const Developer = () => {
    const [websites,setWebsites]=useState([]);

    const fetchWebsites = async () => {
        const results = await axios.get('/.netlify/functions/websites');
        setWebsites(results.data);
    }

    useEffect(()=>{
        fetchWebsites()
    },[])

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