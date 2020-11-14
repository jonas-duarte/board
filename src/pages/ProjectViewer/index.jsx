import React, { Component } from "react";
import ThemeConsumer from "../../components/Theme";

import "./styles.scss";

class ProjectViewer extends Component {
  state = {};
  render() {
    return (
      <ThemeConsumer>
        {({ color }) => (
          <div className="project-viewer">
            <div
              className="project-viewer-project"
              style={{ backgroundColor: `${color}88` }}
            >
              PROJECT
            </div>
            <div className="project-viewer-title">TITLE</div>
            <div
              className="project-viewer-wheel"
              style={{ backgroundColor: `${color}88` }}
            >
              <div></div>
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default ProjectViewer;
