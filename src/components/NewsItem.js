import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

   let {title, desc, imgurl ,newsUrl} = this.props;
    return (
      <div>

<div className="card" style={{width: "18rem"}}>
  <img src={imgurl} />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{desc}...</p>
    <a href={newsUrl} target="_blank" className="btn btn-primary">See More</a>
  </div>
</div>
        
      </div>
    )
  }
}
