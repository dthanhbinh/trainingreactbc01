import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  changeGlass = (glass, name, desc) => {
    this.setState({
      url: `./img/glassesImage/g${glass}.jpg`,
      // ten: `${name}`,
      // desc: `${desc}`,
    });
  };
  renderGlassInfo = () => {
    const arrGlassInfo = this.arrProduct.map((glass, index) => {
      return (
        <div key={index} style={{ backgroundColor: "#fdbd8ecc" }}>
          <h2>{glass.name}</h2>
          <p>{glass.desc}</p>
        </div>
      );
    });
    return arrGlassInfo;
  };
  renderGlass = () => {
    const arrGlass = this.arrProduct.map((glass, index) => {
      return (
        <div key={index} className="col-2">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
            }}
            src={`./img/${glass.url}`}
            alt={glass.url}
            onClick={(gl) => {
              this.changeGlass(gl.id);
              this.renderGlassInfo(gl.name);
            }}
          />
        </div>
      );
    });
    return arrGlass;
  };
  render() {
    return (
      <div>
        <div
          style={{
            background: `url('./img/glassesImage/background.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-dark" style={{ opacity: 0.8 }}>
            <h1 className="text-center text-white">TRY GLASSES APP ONLINE</h1>
          </div>
          <div className="col-5 vglasses__right p-0">
            <div className="vglasses__card">
              <div
                style={{
                  position: "relative",
                  backgroundImage: `url('./img/glassesImage/model.jpg')`,
                  height: "600px",
                  backgroundPosition: "center",
                  width: "450px",
                  left: 400,
                }}
                className="vglasses__model"
                id="avatar"
              >
                <img
                  id="glassesDetail"
                  style={{
                    position: "absolute",
                    left: 65,
                    top: 150,
                    width: "320px",
                    height: "125px",
                    opacity: "0.8",
                  }}
                  src="./img/glassesImage/v1.png"
                />
                <div
                  id="glassesInfo"
                  className="vglasses__info"
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "450px",
                    height: "150px",
                  }}
                >
                  {/* {this.renderGlassInfo()} */}
                </div>
              </div>
            </div>
          </div>

          <div className="container bg-white">
            <div className="row">{this.renderGlass()}</div>
          </div>
        </div>
      </div>
    );
  }
}
