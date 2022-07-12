exports.handler = async function(event,context){
    let affiliations=[
        {
            link:"http://www.ibu.edu.tr/en",
            eng:"Bolu Abant Izzet Baysal University"
        },
        {
            link:"https://www.maastrichtuniversity.nl/",
            eng:"Maastricht University"
        },
        {
            link:"https://www.uni-corvinus.hu/?lang=en/",
            eng:"Corvinus University"
        },
        {
            link:"https://w3.bilkent.edu.tr/bilkent/",
            eng:"Bilkent University"
        },
        {
            link:"https://www.etu.edu.tr/en/",
            eng:"TOBB ETU"
        }
    ];
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(affiliations)
    }
}