import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from '../Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps ={

        country: 'in',
        pagesize: 8,
        category: "general"
    }

    static propsType = {

        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }



    constructor() {

        super();
        this.state = {

            articles: [],
            page: 1,
            loading: false
        }
    };

    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pagesize=${this.props.pagesize}&category=${this.props.category}&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f`;

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pagesize=${this.props.pagesize}&category=${this.props.category}&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({loading:false})
        this.setState({ articles: parseData.articles })


    }

    prevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pagesize=${this.props.pagesize}&category=${this.props.category}&pagesize=${this.props.pagesize}&category=${this.props.category}&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({loading:false})
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            loading: false
        });
    }



nextClick = async () => {

    if(!(this.state.page+1> Math.ceil(this.state.totalResult/20))){


   

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pagesize=${this.props.pagesize}&category=${this.props.category}&pagesize=${this.props.pagesize}&category=${this.props.category}&apiKey=346e13f16b9b48dc8a6fefbc99d89d4f&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({loading:false})
    this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false
    });
}
};


render() {
    return (


        <div className='container my-5'>



            <h3 className='my-3'>Daily News</h3>

            <div className="text-center my-3">
           { this.state.loading &&  <Spinner/>}
            </div>
            

            <div className='row'>
                {this.state.articles.map((element) => {


                    return <div key={element.url} className='col-md-3 mx-3 '>

                        <NewsItem title={element.title} desc={element.description} imgurl={element.urlToImage} newsUrl={element.url} />
                    </div>




                })}
            </div>

            <div className='container d-flex justify-content-around my-5'>

                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
                <button disabled={this.state.page+1> Math.ceil(this.state.totalResult/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.nextClick} >Next &rarr;</button>

            </div>



        </div>
    );
}
};

