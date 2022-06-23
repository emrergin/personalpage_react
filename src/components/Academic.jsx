import './Academic.css'

let articles=[
    {
        link:"https://link.springer.com/content/pdf/10.1007/s00199-020-01312-x.pdf",
        eng:"How to choose a fair delegation?",
        tur:"Adil bir delegasyon nasıl seçilir?",
    },
    {
        link:"https://dergipark.org.tr/en/download/article-file/2117669" ,
        eng:"The collective sectoral multipliers of the European Union",
        tur:"Avrupa Birliği'nin Kolektif Sektörel Çarpanları",
    },
    {
        link:"https://cris.maastrichtuniversity.nl/en/publications/strategic-voting-and-social-welfare-rules"  ,
        eng:"Strategic voting and social welfare rules",
        tur:"Stratejik Oy Verme ve Sosyal Refah Kuralları",
    }
  ];

let affiliations=[
    {
        link:"http://www.ibu.edu.tr/en",
        eng:"Bolu Abant İzzet Baysal University"
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

const Academic = () => {
    return (
        <div className="album2 right-of-the-grid">
            <h1 >
                Publications
            </h1>
        {articles.map((article,index) => (
            <a href={article.link} key={index}
                target="_blank"
                className="drawerItem article">
                {article.eng}
            </a>
        ))}
            <h1 className="kucukYazi">
                Current and Past Affiliations
            </h1>
        {affiliations.map((article,index) => (
            <a href={article.link} key={index}
                target="_blank"
                className="drawerItem article">
                {article.eng}
            </a>
        ))}
        </div>
      );
}
 
export default Academic;