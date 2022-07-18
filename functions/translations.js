exports.handler = async function(event,context){    
    let translations=  [
        {
            link: "https://www.hepsiburada.com/sagduyulu-yatirim-rehberi-emre-ergin-p-HBCV00000UHQYP",
            image: './translationImages/syr.jpg',
            alt: "The Little Book of Common Sense Investing"
        },
        {
            link: "https://rayfowler.itch.io/remnants-of-the-precursors", 
            image: './translationImages/rop.jpg',
            alt: "Remnants of The Precursors",
            large: true
        },
        {
            link: "https://store.steampowered.com/app/498380/AquaNimble/",
            image: './translationImages/an.jpg',
            alt: "AquaNimble",
            large: true
        }, 
        {
            link: "https://store.steampowered.com/app/342610/HyperRogue/",
            image: './translationImages/hr.png', 
            alt: "Hyper Rogue"
        },
        {
            link: "https://store.steampowered.com/app/312280/Simply_Chess",
            image: './translationImages/sc.jpg',
            alt: "Simply Chess",
            large: true
        },
        {
            link: "https://store.steampowered.com/app/368700/Mysterious_Space/",  
            image: './translationImages/ms.jpg',
            alt: "Mysterious Space",
            large: true
        }
    ];
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(translations)
    }
}