import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {



    constructor() {

        super();
        this.state = {

            articles: [],
            page: 1
        }
    }

    async componentDidMount() {

        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f&page=1&pagesize=20";

        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles })


    }

    prevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f&page=${this.state.page - 1}&pagesize=20`;

        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1
        });
    }



nextClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f&page=${this.state.page + 1}&pagesize=20`;

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
        articles: parseData.articles,
        page: this.state.page + 1
    });
};


render() {
    return (


        <div className='container my-5'>



            <h3 className='my-3'>Daily News</h3>

            <div className='row'>
                {this.state.articles.map((element) => {


                    return <div key={element.url} className='col-md-3 mx-3 '>

                        <NewsItem title={element.title} desc={element.description} imgurl={element.urlToImage} newsUrl={element.url} />
                    </div>




                })}
            </div>

            <div className='container d-flex justify-content-around my-5'>

                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.nextClick} >Next &rarr;</button>

            </div>



        </div>
    );
}
};

