exports.handler = async function(event,context){    
    let collaborations = [
        {link: "https://www.ketebe.com/korkut-ata-ne-soyledi-aykut-ertugrul-guray-sungu",
        image: "./bookImages/kans.png",
        alt:"Korkut Ata Ne Söyledi"},
    
        {link: "https://www.ketebe.com/ac%C3%A2ibul-mahl%C3%BBk%C3%A2t",
        image: "./bookImages/am.png",
        alt:"Acaibül Mahlukat"},
    
        {link: "https://www.ketebe.com/seyyahlar-ve-kasifler-kitabi",
        image: "./bookImages/skk.png", 
        alt:"Seyyahlar ve Kaşifler"}
    ];
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(collaborations)
    }
}