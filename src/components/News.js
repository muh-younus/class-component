import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [


        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Abid Hussain",
            "title": "Champions Trophy 2025: Is this Pakistan sports moment to shine, finally?",
            "description": "Pakistan is hosting a major international cricket tournament after nearly three decades. Is it ready for show time?",
            "url": "https://www.aljazeera.com/sports/2025/2/13/champions-trophy-2025-is-this-pakistan-sports-moment-to-shine-finally",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/02/AFP__20250207__36XC72U__v1__HighRes__PakistanCricketStadium-1739448629.jpg?resize=1920%2C1440",
            "publishedAt": "2025-02-13T14:07:54Z",
            "content": "Islamabad, Pakistan Almost three decades ago, on March 17, 1996, Sri Lankan captain Arjuna Ranatunga deftly and calmly guided Australian fast bowler Glenn McGraths delivery to third man as Lahores Ga… [+16352 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }



    ];

    constructor() {

        super();
        this.state = {

            articles: this.articles
        }
    }

    async componentDidMount(){

        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f";

        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles: parseData.articles})


    }
    render() {
        return (


            <div className='container my-5'>



                <h3 className='my-3'>Daily News</h3>

                <div className='row'>
                    {this.state.articles.map((element) => {


                        return <div key={element.url} className='col-md-3 mx-3 '>

                            <NewsItem title={element.title} desc={element.description} imgurl={element.urlToImage} newsUrl = {element.url} />
                        </div>

                    })}







                </div>

            </div>
        )
    }
}
