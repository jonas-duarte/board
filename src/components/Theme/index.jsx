import React, { Component } from "react";

const ThemeContext = React.createContext({ color: "" });

function randomizeColor() {
  const hexAlphabet = "01234567890abcdef";
  const color = `#${[...Array(6).keys()]
    .map(() => hexAlphabet.charAt(parseInt(Math.random() * hexAlphabet.length)))
    .join("")}`;
  console.log(color);
  return color;
}

function validateColor(color) {
  const rgb = [color.substr(1, 2), color.substr(3, 2), color.substr(5, 2)];

  return `#${rgb.join("")}`;
}

function calcWhiteness(color) {
  return [color.substr(1, 2), color.substr(3, 2), color.substr(5, 2)]
    .map((c) => parseInt(`0x${c}`))
    .reduce((a, b) => a + b);
}

function textColor(color) {
  return calcWhiteness(color) > 500 ? "#000000" : "#ffffff";
}

function shadowColor(color) {
  return calcWhiteness(color) > 500 ? "#ffffff" : "#000000";
}

export class ThemeProvider extends Component {
  state = { color: "" };

  setColor = (color) => {
    this.setState({ color });
  };

  handleChangeColor = (e) => {
    let color = e.target.value;

    color = validateColor(color);

    localStorage.setItem("color", color);

    this.setState({ color });
  };

  componentDidMount = () => {
    let color = localStorage.getItem("color");
    if (!color) {
      color = randomizeColor();
      color = validateColor(color);
      localStorage.setItem("color", color);
    }
    this.setState({ color });
  };

  render() {
    const { color } = this.state;
    const { children } = this.props;
    return (
      <ThemeContext.Provider
        value={{
          color,
          textColor: textColor(color),
          shadowColor: shadowColor(color),
          setColor: this.handleChangeColor,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

const ThemeConsumer = ({ children }) => {
  return <ThemeContext.Consumer>{children}</ThemeContext.Consumer>;
};

export default ThemeConsumer;
