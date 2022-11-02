import LinkedImage from './LinkedImage'
import { useStateValue } from '../state';

const Translator = () => {
    const [{ translations,isTurkish },] = useStateValue();

    return ( <div className="album left-of-the-grid">
    <h1 id="tableHeader">
        
        {isTurkish? `Çeviriler`:`Works`} 
    </h1>
    {translations.map((translation,index) => (
    <LinkedImage key={index} book={translation}/>
    ))
    }
    </div> 
    );
}
 
export default Translator;