const LinkedImage = ({book}) => {
    const {link,image,alt,large}=book;
    return ( 
        <a href={link}
            target="_blank"
            className="card">
            <img src={image} alt={alt}
                className={large? "genisImg" : ""}
            />
        </a> 
    );
}
 
export default LinkedImage;