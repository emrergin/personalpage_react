import {Book} from '../types'
 
const LinkedImage = ({book}:{book:Book}) => {
    const {link,image,alt,large}=book;

    return ( 
        <a href={link}
            target="_blank"
            className="card">
            <img src={image} alt={alt}
                className={large? "largeImg" : ""}
            />
        </a> 
    );
}
 
export default LinkedImage;