import {Drawer} from '../types'

const DrawerC = ({item}:{item:Drawer}) => {
    const {link,eng} = item;
    return (         
        <a href={link}
            target="_blank"
            className="drawerItem article">
            {eng}
        </a>
    );
}
 
export default DrawerC;