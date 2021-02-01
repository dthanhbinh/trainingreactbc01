import React, { Component } from 'react'
import style from './DataBinding.module.css'

//class Component
export default class DataBinding extends Component {
    sinhVien = {
        id:1,
        ten:'Nguyen Van A'
    }
    rendersinhVien = () =>{
        //Binding phướng thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
        return <div>
            id:{this.sinhVien.id}-ten:{this.sinhVien.ten}
        </div>
    }
    render() {//Phương thức
        let title = "hello Cybersoft";//biến
        let sanPham = {//object
            ten:'Iphone 5s',
            gia:1000,
            hinhAnh:'https://picsum.photos/200/200'
        }
        return (
            <div>
                <p className={`text-center ${style.textGreen} ${style['txt-light']}`}>abc</p>
                <p style={{backgroundColor: 'red',color:'white', textAlign:'center'}}>def</p>
                {this.rendersinhVien()}
                <h1>Họ tên: {this.sinhVien.ten}</h1>    
                <p id="title">{title}</p>
                <div className="card text-white bg-primary w-25">
  <img className="card-img-top" src={sanPham.hinhAnh} alt />
  <div className="card-body">
    <h4 className="card-title">{sanPham.ten}</h4>
    <p className="card-text">{sanPham.gia}</p>
  </div>
</div>

            </div>
        )
    }
}
