import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {
  render() {
    //this.props là thuộc tính có sẵn của react Component
    //State vs Props
    //Giống: đều là thuộc tính có sẵn, dùng để binding dữ liệu lên giao diện
    //Khác:
    //State: quản lý các trạng thái của biến làm thay đổi giao diện
    //Props:  nhận giá trị từ component cha truyền vào
    // State có thể gán lại giá trị được nhưng props thì không cho phép gán lại giá trị
    // let { ten, tuoi, ma } = this.props.sinhVien;
    let { sv } = this.props;
    return (
      <div>
        <div>
          <div
            style={{ backgroundColor: this.props.bgColor }}
            className="card text-left"
          >
            <img
              width="100"
              height="180"
              className="card-img-top"
              src="https://picsum.photos/100/180"
              alt="abc"
            />
            <div className="card-body">
              <h4 className="card-title">{sv?.ten}</h4>
              <p className="card-text">{sv?.tuoi}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
