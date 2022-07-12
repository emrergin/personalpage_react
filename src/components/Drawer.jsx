const Drawer = ({item}) => {
    const {link,eng} = item;
    return (         
        <a href={link}
            target="_blank"
            className="drawerItem article">
            {eng}
        </a>
    );
}
 
export default Drawer;