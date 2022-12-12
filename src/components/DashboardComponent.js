import postingPhoto from "../img/undraw_posting_photo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Row } from "react-bootstrap";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutDataChart";
import { useState } from "react";
import { UserData } from "../utils/Data";
import { DoughnutCData } from "../utils/DoughnutChart";

const DashboardComponent = ({ cardData, projectData, colorData }) => {
  const [userData, setUserData] = useState({
    labels: UserData.map((el) => el.month),
    datasets: [
      {
        label: "User Earnings",
        data: UserData.map((el) => el.userGain),
        backgroundColor: ["#4e73df"],
        lineTension: 0.3,
      },
    ],
  });

  const [DoughnutData, setDoughnutData] = useState({
    labels: DoughnutCData.map((el) => el.name),
    datasets: [
      {
        label: DoughnutCData.map((el) => el.name),
        data: DoughnutCData.map((el) => el.num),
        backgroundColor: ["#4e73df", "#7FFFD4", "#50C878"],
        borderWidth: 1,
      },
      {
        options: {
          cutout: "80%",
        },
      },
    ],
  });

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#!"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Generate Report
        </a>
      </div>
      <Row className="row">
        {cardData.map((el) => {
          // let icons = '';
          // if(el.)
          return (
            <div className="col-xl-3 col-md-6 mb-4">
              <Card className={`border-left-${el.color} shadow h-100 p-2`}>
                <Card.Body>
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className={`text-xs font-weight-bold text-${el.color} text-uppercase mb-1`}
                      >
                        {el.title}
                      </div>
                      {el.title === "Tasks" ? (
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <div className="h5 mb-0 mr-1 font-weight-bold text-gray-800">
                              {el.data}
                            </div>
                          </div>
                          <div className="col">
                            <div className="progress progress-sm mr-2">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {el.data}
                        </div>
                      )}
                    </div>
                    <div className="col-auto">
                      {el.data === "$40,000" ? (
                        <FontAwesomeIcon
                          icon={faCalendar}
                          size="2x"
                          className="text-gray-300"
                        />
                      ) : el.data === "$215,000" ? (
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          size="2x"
                          className="text-gray-300"
                        />
                      ) : el.data === "50%" ? (
                        <FontAwesomeIcon
                          icon={faClipboardList}
                          size="2x"
                          className="text-gray-300"
                        />
                      ) : el.data === "18" ? (
                        <FontAwesomeIcon
                          icon={faComments}
                          size="2x"
                          className="text-gray-300"
                        />
                      ) : (
                        ""
                      )}
                      {/* <FontAwesomeIcon
                        icon={faCalendar}
                        size="2x"
                        className="text-gray-300"
                      /> */}
                      {/* <img src={el.icon} alt="..." height="20px" width="20px" /> */}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Row>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Earnings Overview
              </h6>
              <div className="dropdown no-arrow">
                <a
                  className="dropdown-toggle"
                  href="#!"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>{" "}
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#!">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-area d-flex justify-content-center">
                {/* <canvas id="myAreaChart"> */}
                <LineChart chartData={userData} />
                {/* </canvas> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Revenue Sources
              </h6>
              <div className="dropdown no-arrow">
                <a
                  className="dropdown-toggle"
                  href="#!"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span></span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>{" "}
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#!">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2 d-flex justify-content-center">
                <DoughnutChart DoughnutDetails={DoughnutData} />
              </div>
              <div className="mt-4 text-center small">
                <span className="mr-2">Direct</span>{" "}
                <span className="mr-2">Social</span>{" "}
                <span className="mr-2">Referral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              {projectData.map((project) => {
                return (
                  <>
                    <h4 className="small font-weight-bold">
                      {project.projectName}{" "}
                      <span className="float-right">
                        {project.projectCompletion === "100%"
                          ? "Complete!"
                          : project.projectCompletion}
                      </span>
                    </h4>
                    <div className="progress mb-4">
                      <div
                        className={`progress-bar ${project.color}`}
                        role="progressbar"
                        style={{ width: `${project.projectCompletion}` }}
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="row">
            {colorData.map((el) => {
              return (
                <div className="col-lg-6 mb-4">
                  <div
                    className={`card ${el.color} ${
                      el.name === "Light" ? "text-dark" : "text-white"
                    } shadow`}
                  >
                    <div className="card-body">
                      {el.name}
                      <div
                        className={`text-${
                          el.name === "Light" ? "dark" : "white"
                        }-50 small `}
                      >
                        {el.colorName}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-lg-6 mb-4">
              <div className="card bg-success text-white shadow">
                <div className="card-body">
                  Success
                  <div className="text-white-50 small">#1cc88a</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-info text-white shadow">
                <div className="card-body">
                  Info
                  <div className="text-white-50 small">#36b9cc</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-warning text-white shadow">
                <div className="card-body">
                  Warning
                  <div className="text-white-50 small">#f6c23e</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-danger text-white shadow">
                <div className="card-body">
                  Danger
                  <div className="text-white-50 small">#e74a3b</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-secondary text-white shadow">
                <div className="card-body">
                  Secondary
                  <div className="text-white-50 small">#858796</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-light text-black shadow">
                <div className="card-body">
                  Light
                  <div className="text-black-50 small">#f8f9fc</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  Dark
                  <div className="text-white-50 small">#5a5c69</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Illustrations
              </h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "25rem" }}
                  src={postingPhoto}
                  alt="..."
                />
              </div>
              <p>
                Add some quality, svg illustrations to your project courtesy of{" "}
                <a target="_blank" rel="noreferrer" href="https://undraw.co/">
                  unDraw
                </a>
                , a constantly updated collection of beautiful svg images that
                you can use completely free and without attribution!
              </p>
              <a target="_blank" rel="noreferrer" href="https://undraw.co/">
                Browse Illustrations on unDraw →
              </a>
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Development Approach
              </h6>
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p className="mb-0">
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
