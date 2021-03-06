import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

import {
  faChevronLeft,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import ThemeConsumer from "../Theme";

const openingTransition = {
  transition:
    "left .3s ease-out, right .3s ease-out, background-color 2s ease-out",
};

class GarageDoor extends Component {
  state = { opened: false, showInfo: true };

  componentDidMount = () => {
    // this.handleDoorOpening();
  };

  handleDoorOpening = () => {
    let { opened, showInfo } = this.state;
    opened = !opened;
    if (opened) {
      showInfo = false;
    } else {
      setTimeout(() => {
        let { opened } = this.state;
        if (!opened) this.setState({ showInfo: true });
      }, 325);
    }
    this.setState({ opened, showInfo });
  };

  render() {
    const { opened, showInfo } = this.state;
    const { children, info } = this.props;

    return (
      <ThemeConsumer>
        {({ color, textColor, shadowColor, setColor }) => (
          <div className="garage-door">
            <div className="garage-door-content">{children}</div>
            <div
              className="garage-door-left"
              style={{
                ...openingTransition,
                left: opened ? "-50%" : "0",
                backgroundColor: color,
              }}
            >
              {showInfo ? (
                <div
                  className="garage-door-color-picker"
                  style={{
                    color: textColor,
                    textShadow: `0 0 10px ${shadowColor}`,
                  }}
                >
                  <input type="color" onChange={setColor} value={color} />
                  <label htmlFor="head">Color selector</label>
                </div>
              ) : null}
            </div>
            <div
              className="garage-door-right"
              style={{
                ...openingTransition,
                right: opened ? "-50%" : "0",
                backgroundColor: color,
              }}
            >
              <div
                className="garage-door-unlock"
                onClick={this.handleDoorOpening}
                style={{
                  ...openingTransition,
                  justifyContent: opened ? "left" : "center",
                  backgroundColor: color,
                  boxShadow: `0 0 3px 3px ${textColor}`,
                  color: `${textColor}88`,
                }}
              >
                <FontAwesomeIcon
                  icon={opened ? faChevronLeft : faFingerprint}
                />
              </div>
              <SvgIcon></SvgIcon>
            </div>
            {showInfo ? (
              <>
                <div
                  className="garage-door-info"
                  style={{
                    color: textColor,
                    textShadow: `0 0 10px ${shadowColor}`,
                  }}
                >
                  {info}
                </div>
              </>
            ) : null}
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default GarageDoor;

const SvgIcon = () => {
  return (
    <svg
      className="garage-door-icon"
      viewBox="0 0 64 64"
      width="512"
      height="512"
    >
      <g>
        <path d="M48.99,30.771c-0.018-3.296-0.568-6.352-1.631-9.124c1.19-1.288,2.675-2.271,4.345-2.828   c1.856-0.619,3.552-1.578,5.037-2.852C60.083,13.103,62,8.936,62,4.534V1.382L56.624,4.07c-1.277,0.639-2.643,1.065-4.058,1.268   C49.352,5.797,46.313,7.304,44,9.586c-2.312-2.281-5.352-3.789-8.566-4.248c-1.415-0.203-2.78-0.629-4.058-1.268L26,1.382v3.152   c0,4.402,1.917,8.569,5.259,11.433c1.485,1.274,3.181,2.233,5.037,2.852c2.021,0.674,3.767,1.932,5.047,3.637l0.57,0.761   c-0.288,2.586-1.36,5.03-3.106,6.994c-0.775,0.872-1.61,1.694-2.487,2.467l-1.037-1.556C34.814,30.419,34.03,30,33.187,30   c-1.159,0-2.164,0.785-2.444,1.909c-0.44,1.761-1.216,3.389-2.304,4.84l-0.963,1.284C24.15,39.323,20.66,39.99,17.082,40   l-5.097-0.85c-0.601-0.1-1.212-0.15-1.818-0.15c-2.954,0-5.731,1.15-7.871,3.29L2,42.583V43c0,1.489,0.77,2.833,2.021,3.6   c0.121,2.533,1.466,4.884,3.638,6.241l0.173,0.108C11.025,54.945,14.691,56,18.434,56h5.119c0.407,0,0.815-0.026,1.223-0.045   c0.383,0.662,0.803,1.302,1.291,1.887c2.203,2.645,5.299,4.336,8.716,4.764l3.094,0.387L38.63,63c1.307,0,2.37-1.063,2.37-2.37   c0-0.693-0.302-1.349-0.828-1.799l-2.726-2.336c-1.077-0.923-2.108-1.901-3.093-2.924C43.219,49.396,49.042,40.435,48.99,30.771z    M36.929,16.922c-1.61-0.537-3.08-1.369-4.369-2.473c-2.876-2.466-4.535-6.044-4.56-9.831l2.481,1.241   c1.47,0.735,3.04,1.226,4.669,1.458c2.823,0.403,5.488,1.736,7.506,3.752L44,12.415l1.344-1.345   c2.018-2.016,4.683-3.349,7.506-3.752c1.629-0.233,3.199-0.724,4.669-1.458L60,4.618c-0.024,3.786-1.684,7.365-4.56,9.831   c-1.289,1.104-2.759,1.937-4.369,2.473c-1.718,0.573-3.273,1.525-4.582,2.759c-0.082-0.165-0.157-0.334-0.243-0.496   C45.857,18.454,45.094,18,44.253,18c-1.212,0-2.196,0.964-2.244,2.164C40.609,18.686,38.88,17.573,36.929,16.922z M32.683,32.394   c0.1-0.401,0.707-0.505,0.937-0.162l1.146,1.719c-1.172,0.898-2.408,1.712-3.701,2.422C31.78,35.13,32.33,33.801,32.683,32.394z    M23.553,54h-4.702l0.431-0.345c1.133-0.906,2.511-1.466,3.947-1.615l0.105,0.422c0.13,0.518,0.295,1.028,0.486,1.528   C23.731,53.991,23.642,54,23.553,54z M32.926,52.014c-0.521-0.595-1.029-1.2-1.517-1.821l2.392-1.793   c0.824-0.619,1.714-1.167,2.644-1.629l-0.889-1.791c-1.039,0.516-2.033,1.128-2.955,1.82l-4.001,3l0.601,0.8   c2.034,2.712,4.37,5.206,6.945,7.413l2.726,2.336C38.953,60.419,39,60.522,39,60.63c0,0.204-0.166,0.37-0.37,0.37h-0.567   l-3.032-0.379c-2.912-0.364-5.55-1.806-7.427-4.06c-1.104-1.325-1.909-2.91-2.329-4.584L24.781,50H24   c-2.16,0-4.279,0.743-5.968,2.093l-2.152,1.722c-2.467-0.356-4.846-1.223-6.989-2.563l-0.173-0.108   c-1.272-0.795-2.163-2.051-2.531-3.469C9.575,49.193,13.288,50,17,50v-2c-3.771,0-7.547-0.891-10.919-2.578L5.236,45   c-0.644-0.322-1.081-0.917-1.202-1.608c2.04-1.88,4.858-2.728,7.623-2.269l5.179,0.863L17,42c4.115,0,8.126-0.802,11.922-2.384   l0.134-0.056c4.278-1.782,8.167-4.556,11.246-8.02C42.687,28.858,44,25.404,44,21.814v-1.562c0-0.236,0.385-0.31,0.479-0.13   c1.645,3.098,2.489,6.684,2.511,10.659c0.024,4.39-1.286,8.617-3.589,12.243c-1.956,0.061-3.884,0.407-5.735,1.061l0.666,1.886   c1.161-0.41,2.358-0.677,3.572-0.828C39.56,48.07,36.493,50.45,32.926,52.014z" />
        <rect x="13" y="43" width="2" height="2" />
        <path d="M11,27c1.654,0,3-1.346,3-3s-1.346-3-3-3s-3,1.346-3,3S9.346,27,11,27z M11,23c0.552,0,1,0.449,1,1s-0.448,1-1,1   s-1-0.449-1-1S10.448,23,11,23z" />
        <path d="M57,46c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S58.654,46,57,46z M57,50c-0.552,0-1-0.449-1-1s0.448-1,1-1   s1,0.449,1,1S57.552,50,57,50z" />
        <path d="M55,22c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S56.654,22,55,22z M55,26c-0.552,0-1-0.449-1-1s0.448-1,1-1   s1,0.449,1,1S55.552,26,55,26z" />
        <path d="M17,9c1.654,0,3-1.346,3-3s-1.346-3-3-3s-3,1.346-3,3S15.346,9,17,9z M17,5c0.552,0,1,0.449,1,1s-0.448,1-1,1s-1-0.449-1-1   S16.448,5,17,5z" />
        <rect x="51" y="38" width="2" height="2" />
        <rect x="61" y="55" width="2" height="2" />
        <rect x="1" y="8" width="2" height="2" />
        <rect x="21" y="17" width="2" height="2" />
        <rect x="4" y="32" width="2" height="2" />
      </g>
    </svg>
  );
};
