import React, { Component } from 'react'

export default class BTLRProductitem extends Component {
    render() {
        return (
            <div>
  <div className="card" style={{width: '18rem'}}>
    <img src="https://picsum.photos/700/400" className="card-img-top" alt="" />
    <div className="card-body">
      <h5 className="card-title">Item</h5>
      <span className="card-price">$24.99</span>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div className="card-footer">
  <small className="text-muted">
  <div>
  <i className="ionicons ion-ios-star" />
  <i className="ionicons ion-ios-star" />
  <i className="ionicons ion-ios-star" />
  <i className="ionicons ion-ios-star" />
  <i className="ionicons ion-ios-star-outline" />
</div>

  </small>
</div>
  </div>
</div>

        )
    }
}
