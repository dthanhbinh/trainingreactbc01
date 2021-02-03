import React, { Component } from 'react'

export default class HandleEvent extends Component {


    handleClick = () =>{
        alert ('Hello');
    }

    showMesseage = (name) =>{
        alert ('hello '+name);
    }

    render() {
        return (
            <div>
                {/* Cách 1 truyền call back trực tiếp */}
                <button className="btn btn-success" onClick={this.showMesseage.bind(this,'Sĩ tool')}>Click me!</button>
                {/* Cách 2 Truyền hàm nặc danh */}
                <button onClick={()=>{
                    alert ('Hello')
                    // this.showMesseage('Bình')
                    // this.handleClick
                }}>Show me the meaning of being lonely</button>
            </div>
        )
    }
}

