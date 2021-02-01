import React, { Component } from 'react'
import BTLRProductitem from './BTLRProductitem'

export default class BTLRProductlist extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-4"><BTLRProductitem/></div>
                    <div className="col-4"><BTLRProductitem/></div>
                    <div className="col-4"><BTLRProductitem/></div>
                </div>
            </div>
            </div>
        )
    }
}
