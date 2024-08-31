import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date} = this.props;
        return (
            <div className="my-3">
                <div className="card"  >
                    <img src={!imageUrl?"https://wallpaperaccess.com/full/2112558.jpg":imageUrl}className="card-img-top:imageUrl" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {title} <span class="badge text-bg-danger"> Latest News</span></h5>
                            <p className="card-text"> {description}</p>
                            <p className="card-text"><small className="text-body-secondary">By {author}on{date}  </small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark"> Read More</a>
                        </div>
                           
                        </div>
                </div>
            
        )
    }
}

export default NewsItem 

