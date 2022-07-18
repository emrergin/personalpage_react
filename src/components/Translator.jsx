import LinkedImage from './LinkedImage'
import { useEffect,useState } from 'react';
import axios from 'axios'

const Translator = () => {
    const [translations,setTranslations]=useState([]);

    const fetchTranslations = async () => {
        const results = await axios.get('/.netlify/functions/translations')
        setTranslations(results.data);
    }

    useEffect(()=>{
        fetchTranslations()
    },[])

    return ( <div className="album left-of-the-grid">
    <h1 id="tableHeader">
        Works
    </h1>
    {translations.map((translation,index) => (
    <LinkedImage key={index} book={translation}/>
    ))
    }
    </div> 
    );
}
 
export default Translator;