import React, { Component } from 'react'
import BTLRCarousel from './BTLRCarousel'
import BTLRProductlist from './BTLRProductlist'

export default class BTLRContent extends Component {
    render() {
        return (
            <div>
                <BTLRCarousel/>
                <BTLRProductlist/>
            </div>
        )
    }
}
