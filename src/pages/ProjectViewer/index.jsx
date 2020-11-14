import {
  faBackward,
  faForward,
  faRedo,
  faReply,
  faShare,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ThemeConsumer from "../../components/Theme";

import "./styles.scss";

const PROJETOS = 6;

class ProjectViewer extends Component {
  state = { project: 0 };

  handleNextProject = () => this.handleChangeProject("next");
  HandlePreviousProject = () => this.handleChangeProject("previous");

  handleChangeProject = (func) => {
    let { project } = this.state;
    func === "next" ? project++ : project--;
    this.setState({ project });
  };

  render() {
    const { project } = this.state;

    return (
      <ThemeConsumer>
        {({ color }) => (
          <div className="project-viewer">
            <div
              className="project-viewer-project"
              style={{ backgroundColor: `${color}88` }}
            >
              <table style={{ border: "1px solid black" }}>
                <tr>
                  <th>dasdasdas</th>
                  <th>dasdasdas</th>
                  <th>dasdasdas</th>
                </tr>
                <tr>
                  <td>ADKADKS</td>
                  <td>ADKADKS</td>
                  <td>ADKADKS</td>
                </tr>
                <tr>
                  <td>ADKADKS</td>
                  <td>ADKADKS</td>
                  <td>ADKADKS</td>
                </tr>
                <tr>
                  <td>ADKADKS</td>
                  <td>ADKADKS</td>
                  <td>ADKADKS</td>
                </tr>
              </table>
            </div>
            <div className="project-viewer-title">
              The table is a great component to show data
            </div>
            <div className="select-wheel">
              <div
                className="select-wheel-circle"
                style={{
                  backgroundColor: `${color}88`,
                  transform: `rotate(${(project * 360) / PROJETOS}deg)`,
                }}
              >
                {[...Array(PROJETOS).keys()].map((k, i, a) => (
                  <div
                    style={{ transform: `rotate(${i * (360 / a.length)}deg)` }}
                  >
                    <div>TABLE</div>
                  </div>
                ))}
              </div>
              <div className="select-wheel-navigator">
                <button
                  style={{ backgroundColor: `${color}88` }}
                  onClick={this.handleNextProject}
                >
                  <FontAwesomeIcon icon={faReply} />
                </button>
                <button
                  style={{ backgroundColor: `${color}88` }}
                  onClick={this.HandlePreviousProject}
                >
                  <FontAwesomeIcon icon={faShare} />
                </button>
              </div>
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default ProjectViewer;
