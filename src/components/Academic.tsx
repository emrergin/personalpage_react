import './Academic.css'
import Drawer from './Drawer'
import { useStateValue } from '../state';

const Academic = () => {
    const [{ articles, affiliations }, ] = useStateValue();

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