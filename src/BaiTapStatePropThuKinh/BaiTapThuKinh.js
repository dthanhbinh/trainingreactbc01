import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  state = {
    glass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  arrGlass = [
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
  renderGlass = () => {
    return this.arrGlass.map((glass, index) => {
      return (
        <div key={index} className="col-2">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
            }}
            src={glass.url}
            alt={glass.url}
            onClick={() => {
              this.changeGlass(glass);
              console.log(glass);
            }}
          />
        </div>
      );
    });
  };

  changeGlass = (index) => {
    this.setState({
      glass: index,
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            background: `url('./glassesImage/background.jpg')`,
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
                  backgroundImage: `url('./glassesImage/model.jpg')`,
                  height: "600px",
                  backgroundPosition: "center",
                  width: "450px",
                  left: 400,
                  backgroundRepeat: "no-repeat",
                }}
                className="vglasses__model"
                id="avatar"
              >
                <div>
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
                    src={this.state.glass.url}
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
                      backgroundColor: "#fdbd8ecc",
                    }}
                  >
                    <div style={{ backgroundColor: "#fdbd8ecc" }}>
                      <h2>{this.state.glass.name}</h2>
                      <p>{this.state.glass.desc}</p>
                    </div>
                  </div>
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
