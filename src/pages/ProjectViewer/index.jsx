import { faReply, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ThemeConsumer from "../../components/Theme";
import Projects from "../../projects";

import "./styles.scss";

const ROULETTE_SIZE = 6;

const PROJECTS = Projects;

function rangeConvertion(range, index) {
  return (((index + range) % range) + range) % range;
}

class ProjectViewer extends Component {
  state = { project: 0, projectsToShow: [] };

  componentDidMount() {
    const projectsToShow = [];

    const startIndex = 0;

    let pIndex = startIndex;
    for (let i = 0; i <= ROULETTE_SIZE / 2; i++) {
      projectsToShow.push(this.getProject(pIndex));
      pIndex++;
    }

    pIndex = startIndex - ROULETTE_SIZE / 2 + 1;
    for (let i = 0; i < ROULETTE_SIZE / 2 - 1; i++) {
      projectsToShow.push(this.getProject(pIndex));
      pIndex++;
    }

    this.setState({ projectsToShow });
  }

  getProject(index) {
    const projects = PROJECTS;
    const realIndex = rangeConvertion(projects.length, index);
    return projects[realIndex];
  }

  handleNextProject = () => this.handleChangeProject("next");
  handlePreviousProject = () => this.handleChangeProject("previous");

  handleChangeProject = (func) => {
    let { project, projectsToShow } = this.state;
    if (func === "next") {
      project++;
      projectsToShow[
        rangeConvertion(ROULETTE_SIZE, ROULETTE_SIZE / 2 + project)
      ] = this.getProject(project + ROULETTE_SIZE / 2);
    } else {
      project--;
      projectsToShow[
        rangeConvertion(ROULETTE_SIZE, ROULETTE_SIZE / 2 + project + 1)
      ] = this.getProject(project - ROULETTE_SIZE / 2 + 1);
    }
    this.setState({ project });
  };

  render() {
    const { project, projectsToShow } = this.state;

    return (
      <ThemeConsumer>
        {({ color }) => (
          <div className="project-viewer">
            <div
              className="project-viewer-project"
              style={{ backgroundColor: `${color}88` }}
            >
              {this.getProject(project).component}
            </div>
            <div className="project-viewer-title">
              {this.getProject(project).description}
            </div>
            <div className="select-wheel">
              <div
                className="select-wheel-circle"
                style={{
                  backgroundColor: `${color}88`,
                  transform: `rotate(${(-project * 360) / ROULETTE_SIZE}deg)`,
                }}
              >
                {projectsToShow.map(({ label }, i) => (
                  <div
                    key={i}
                    style={{
                      transform: `rotate(${
                        i * (360 / projectsToShow.length)
                      }deg)`,
                    }}
                  >
                    {<div>{label}</div>}
                  </div>
                ))}
              </div>
              <div className="select-wheel-navigator">
                <button
                  style={{ backgroundColor: `${color}88` }}
                  onClick={this.handlePreviousProject}
                >
                  <FontAwesomeIcon icon={faReply} />
                </button>
                <button
                  style={{ backgroundColor: `${color}88` }}
                  onClick={this.handleNextProject}
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
