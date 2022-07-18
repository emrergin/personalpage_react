interface Website {
    image:string,
    alt:string,
    live: string,
    code: string
}

const Website = ({website}:{website:Website}) => {
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