import React, { Component } from "react";
import "./matrix.css";
const MATRIXSQUARES = 4;
const MATRIXSQUARESTILES = [1, 2, 3, 4];
// Class to draw 4*4 Matrix squares
class Matrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSquare: {},
    };
  }
//   componentDidMount() {}
//   componentDidUpdate(prevProps, prevState) {}

// on tiles click change the color to red

  changeColor = (event) => {
    var selectedSquare = { ...this.state.selectedSquare };
    if (Object.keys(selectedSquare).length > 1) {
      document.getElementById(
        Object.keys(selectedSquare)[0]
      ).style.backgroundColor = "#0000ff";
      document.getElementById(event.target.id).style.backgroundColor =
        "#ff0000";
      selectedSquare[event.target.id] = true;
      delete selectedSquare[Object.keys(selectedSquare)[0]];
      this.setState({ selectedSquare });
    } else {
      document.getElementById(event.target.id).style.backgroundColor =
        "#ff0000";
      // document.getElementById(event.target.id).style.color = "#ff0000";
    }
    selectedSquare[event.target.id] = true;
    this.setState({ selectedSquare });
  };

  // Draw 4*4 tiles
  drawMatrix = () => {
    var count = 0;
    return (
      <>
        {MATRIXSQUARESTILES.map((rowtile) => {
          return MATRIXSQUARESTILES.map((columntile) => {
            count++;
            return (
              <div
                id={count}
                className="tiles"
                onClick={this.changeColor.bind(this)}
              ></div>
            );
          });
        })}
      </>
    );
  };
  render() {
    return (
      <div className="mainDivWrapper">
        <div className="gridContainer">
          {/* <div className="tiles" onClick={this.changeColor()}></div> */}
          {this.drawMatrix()}
        </div>
      </div>
    );
  }
}
export default Matrix;
