import berlinImg from "../public/images/berlin.jpg"
import spainImg from "../public/images/spain.jpg"
import sinaiImg from "../public/images/sinai.jpg"
import malaysiaImg from "../public/images/malaysia.jpg"


const data = [
    {
        title: "Arenas de Barcelona",
        location: "Barcelona - Spain",
        mapLink: "https://goo.gl/maps/HbDZuHYWU2BbFiSf6",
        date: {
            startDate: "15 June 2014" ,
            endDate:  "30 June 2014"
        },
        description: "The spectacular conversion of the former bullring 'Las Arenas' and the opening of the new building, Barcelona gained a real attraction. ",
        img : spainImg,  
        id: "1"
    },
    {
        title: "Saint Catherine - Mount Moses",
        location: "South Sinai - Egypt",
        mapLink: "https://goo.gl/maps/ZdFZFLnAAiXkKTMC8",
        date: {
            startDate: "10 Jan 2020" ,
            endDate:  "16 Jan 2020"
        },
        description: "Mount Moses in Saint Catherine, Sinai: Majestic peak, pilgrimage site, and stunning sunrise views.",
        img : sinaiImg,  
        id: "2"
    },
    {
        title: "Petronas Twin Towers",
        location: "KualaLumpur - Malaysia",
        mapLink: "https://goo.gl/maps/U58mKTXpteAvSosX6",
        date: {
            startDate: "01 April 2023" ,
            endDate:  "01 July 2023"
        },
        description: "Once the world's tallest, these 88-story towers bear a modern Islamic design & a visitor skybridge.",
        img : malaysiaImg,  
        id: "3"
    },
    {
        title: "Three Girls One Boy Statue by the River",
        location: "Berlin - Germany",
        mapLink: "https://goo.gl/maps/bTeWC6Hu8CdRdCrz7",
        date: {
            startDate: "24 Sep 2016" ,
            endDate:  "11 Oct 2016"
        },
        description: "Once Four statues from Palasthotel's fountain, once a Stasi base, relocated to Spree bank near Museum Island.",
        img : berlinImg,  
        id: "4"
    },
]

export default data