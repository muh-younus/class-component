import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

   let {title, desc, imgurl} = this.props;
    return (
      <div>

<div className="card" style={{width: "18rem"}}>
  <img src={imgurl} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
      </div>
    )
  }
}
