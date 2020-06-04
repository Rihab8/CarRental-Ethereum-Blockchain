import React, { Component } from "react";
import Fire from "./Fire";
import ipfs from "./ipfs";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navtwo from "./Navtwo";
import Test from "./Test";
import "./styles/App.css";
export class Owner extends Component {
  constructor(props) {
    super(props);
    this.state = { hash: "" };

    this.captureFile = this.captureFile.bind(this);
  }
  captureFile(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.hash = Buffer(reader.result);
      this.setState({ hash: this.hash });
      console.log("buffer", this.hash);
    };
  }

  render() {
    return (
      <div>
        <Navtwo />
        <h2 className="ownerHead">Enter Car Details to Rent!</h2>
        <Container className="">
          <Row>
            <Col sm={4}>
              <Test />
            </Col>
            <Col sm={4}>
              <form
                onSubmit={(event) => {
                  event.preventDefault(); //prevent from reloading the page
                  ipfs.files.add(this.hash, (error, result) => {
                    if (error) {
                      console.error(error);
                      return;
                    }

                    this.Img = result[0].hash;

                    const regno = this.Regno.value;
                    const desc = this.desc.value;
                    const model = this.Model.value;
                    const rate = this.Rate.value;
                    console.log("ifpsHash", this.Img);
                    this.props.addCar(regno, model, desc, this.Img, rate);
                  });
                }}
              >
                <div className="form-group mr-sm-2">
                  <input
                    id="postContent"
                    type="text"
                    ref={(input) => {
                      this.Regno = input;
                    }}
                    className="form-control"
                    placeholder="Registration Number"
                    required
                  />
                </div>
                <div className="form-group mr-sm-2">
                  <input
                    id="postContent"
                    type="text"
                    ref={(input1) => {
                      this.Model = input1;
                    }}
                    className="form-control"
                    placeholder="Model"
                    required
                  />
                </div>
                <div className="form-group mr-sm-2">
                  <input
                    id="postContent"
                    type="text"
                    ref={(input2) => {
                      this.Rate = input2;
                    }}
                    className="form-control"
                    placeholder="Rate"
                    required
                  />
                </div>
                <div className="form-group mr-sm-2">
                  <textarea
                    id="postContent"
                    type="text"
                    ref={(input2) => {
                      this.desc = input2;
                    }}
                    className="form-control"
                    placeholder="Owner details and Car condition"
                    required
                  />
                </div>
                <div>
                  {/* <input type="file" onChange={this.captureFile} /> */}
                  <div>
                    <label htmlFor="upload-button">
                      {this.state.hash !== "" ? (
                        <img
                          src={`data:$png;base64,${new Buffer(
                            this.state.hash
                          ).toString("base64")}`}
                          alt="o"
                          height="100"
                          width="100"
                        />
                      ) : (
                        <>
                          <span className="fa-stack fa-2x text-center text-white">
                            <i class="fas fa-cloud-upload-alt  ml-3"></i>
                          </span>
                          <h6 className="text-center text-white">
                            Upload Here
                          </h6>
                        </>
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-button"
                      style={{ display: "none" }}
                      onChange={this.captureFile}
                    />
                    <br />
                  </div>
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Col>
          </Row>
        </Container>
        <div className="row ">
          <div className="col-lg-12 mt-3">
            <div className="card ">
              <div className="card-header ">
                <h5 className="info-title">Rented Cars</h5>
              </div>
              <div className="card-body ">
                <table className="table  mb-2">
                  <thead>
                    <tr>
                      <th scope="col">Regno</th>
                      <th scope="col">Model</th>
                      <th scope="col">Status</th>
                      <th scope="col">ff</th>
                      <th scope="col">Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cars.map((car, key) => {
                      if (car.Owner === this.props.account) {
                        return (
                          <tr key={key}>
                            <th scope="row">{car.Regno}</th>
                            <td>{car.Model}</td>
                            <td>{car.Status}</td>
                            {car.Status === "Hired" ? (
                              <td>
                                <button
                                  onClick={() => {
                                    // event.preventDefault()
                                    this.props.endRent(car.id);
                                  }}
                                >
                                  End Rent
                                </button>
                              </td>
                            ) : (
                              <td>not rented</td>
                            )}
                            <td>
                              <Fire />
                            </td>
                          </tr>
                        );
                      }

                      return null;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Owner;
