import React, { Component } from 'react'
import BTProductItems from './BTProductItems'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">BEST SMART PHONE</h1>
                <div className="row">
                    <div className="col-3"><BTProductItems/></div>
                    <div className="col-3"><BTProductItems/></div>
                    <div className="col-3"><BTProductItems/></div>
                    <div className="col-3"><BTProductItems/></div>
                </div>
            </div>
        )
    }
}
