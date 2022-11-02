import {Drawer} from '../types'
import { useStateValue } from '../state';

const DrawerC = ({item}:{item:Drawer}) => {
    const [{ isTurkish }, ] = useStateValue();
    const {link,eng,tur} = item;
    return (         
        <a href={link}
            target="_blank"
            className="drawerItem article">
            {isTurkish? tur:eng}
        </a>
    );
}
 
export default DrawerC;