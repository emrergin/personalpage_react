import { useEffect,useState } from 'react';
import './Academic.css'
import Drawer from './Drawer'
import axios from 'axios'

const Academic = () => {
    const [affiliations,setAffiliations]=useState([]);
    const [articles,setArticles]=useState([]);

    const fetchAff = async () => {
        const results = await axios.get('/.netlify/functions/affiliations')
        setAffiliations(results.data);
    }

    const fetchArt = async () => {
        const results = await axios.get('/.netlify/functions/articles')
        setArticles(results.data);
    }

    useEffect(()=>{
        fetchAff()
        fetchArt()
    },[])

    return (
        <div className="album2 right-of-the-grid">
            <h1 >
                Publications
            </h1>
        {articles.map((article,index) => (
            <Drawer item={article} key={index}/>
        ))}
            <h1 className="kucukYazi">
                Current and Past Affiliations
            </h1>
        {affiliations.map((affiliation,index) => (
            <Drawer item={affiliation} key={index}/>
        ))}
        </div>
      );
}
 
export default Academic;