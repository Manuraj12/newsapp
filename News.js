import React, { Component } from 'react'

 
import NewsItem from './NewsItem'
import Spinner from './Spinner';
 
import PropTypes from 'prop-types'
 


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

      articles = [
       
    ]


    constructor() {
        super();
       
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5945622657f46d39293c00d62c17785&pageSize=9`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
   
        this.setState({
            articles: parseData.articles,
            loading: false
        })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5945622657f46d39293c00d62c17785&page=${this.state.page - 1}&pageSize=9`;
        this.setState({ loading: false  });
        let data = await fetch(url);
        let parseData = await data.json()
       
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })



    }
    handleNextClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5945622657f46d39293c00d62c17785&page=${this.state.page + 1}&pageSize=9`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()
     
        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            loading: false
        })

    }


        render() {
       
        return (
            <div className="container" my-6>
                <h2 className='text-center'>REPUBLIC NEWS - Top HeadLines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                       {!this.state.loading && this.state.articles && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                        </div>


                    })}





                </div>
                <div className="container d-flex justify-content-between"  >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News
