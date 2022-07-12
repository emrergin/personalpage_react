const Website = ({website}) => {
    const {image,alt,live,code}=website;
    return ( 
        <div className="card2" >
        <img src={image} alt={alt}/>
        <div className="cardText">  
            <a href={live}
            target="_blank"
            >
                Link
            </a>
            <a href={code}
            target="_blank"
            >
                Repo
            </a>
        </div>
    </div> 
     );
}
 
export default Website;