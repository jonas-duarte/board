import React, { Component } from "react";

class StyleParser extends Component {
  state = {
    hover: false,
    active: false,
  };

  _onHover(hover) {
    this.setState({
      hover: hover,
      active: this.state.active && hover,
    });
  }

  _onActive(active) {
    this.setState({ active: active });
  }

  _modifyStyle(style) {
    style = {
      ...style,
      ...(this.state.hover ? style.hover : {}),
      ...(this.state.active ? style.active : {}),
    };

    style.hover = undefined;
    style.active = undefined;

    return style;
  }

  render() {
    const { style } = this.props.children.props;
    const children = React.Children.map(this.props.children, (child) => {
      // checking isValidElement is the safe way and avoids a typescript error too
      const props = {
        onMouseOver: this._onHover.bind(this, true),
        onMouseOut: this._onHover.bind(this, false),
        onMouseDown: this._onActive.bind(this, true),
        onMouseUp: this._onActive.bind(this, false),
        style: this._modifyStyle(style),
      };
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
      }
      return child;
    });

    return children;
  }
}

export default StyleParser;
