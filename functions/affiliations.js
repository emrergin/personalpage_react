exports.handler = async function(event,context){
    let affiliations=[
        {
            link:"http://www.ibu.edu.tr/en",
            eng:"Bolu Abant Izzet Baysal University",
            tur:"Bolu Abant İzzet Baysal Üniversitesi"
        },
        {
            link:"https://www.maastrichtuniversity.nl/",
            eng:"Maastricht University",
            tur:"Maastricht Üniversitesi"
        },
        {
            link:"https://www.uni-corvinus.hu/?lang=en/",
            eng:"Corvinus University",
            tur:"Corvinus Üniversitesi"
        },
        {
            link:"https://w3.bilkent.edu.tr/bilkent/",
            eng:"Bilkent University",
            tur: "Bilkent Üniversitesi"
        },
        {
            link:"https://www.etu.edu.tr/en/",
            eng:"TOBB University of Economics & Technology",
            tur: "TOBB Ekonomi ve Teknoloji Üniversitesi"
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