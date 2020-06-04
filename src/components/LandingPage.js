import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "../components/styles/cards.scss";
// import { Container, Row, Col } from "react-bootstrap";
// import "./nav.jpg";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.isSigned = this.isSigned.bind(this);
  }
  isSigned() {
    if (!this.props.authorized) alert("Sign in First");
  }
  render() {
    return (
      <div style={{ backgroundColor: "#25d366" }}>
        <div className="container carlist" style={{ paddingTop: "100px" }}>
          <div className="row">
            {this.props.cars &&
              this.props.cars.map((car, index) => (
                <div class="card col-md-3 col-sm-6" style={{ width: "18rem" }}>
                  <img
                    src={`https://ipfs.io/ipfs/${car.Image}`}
                    class="card-img-top"
                    alt={car.Image}
                    style={{ margin: "0px" }}
                  />
                  <div class="card-body">
                    <h3 class="card-title">{car.Model}</h3>
                    <p class="card-text">
                      {" "}
                      Rate:{" "}
                      {window.web3.utils.fromWei(
                        car.Rate.toString(),
                        "Ether"
                      )}{" "}
                      ETH
                    </p>
                    {car.Status === "Available" ? (
                      this.props.authorized ? (
                        <Link
                          to={{
                            pathname: "/Booking",
                            state: {
                              model: car.Model,
                              reg: car.Regno,
                              image: car.Image,
                              rate: car.Rate.toString(),
                              id: car.id.toString(),
                            },
                          }}
                        >
                          <button
                            onClick={this.isSigned}
                            class="btn btn-primary deep-purple-text p-1 mx-0 mb-0 book-btn"
                          >
                            book now
                          </button>
                        </Link>
                      ) : (
                        <button onClick={this.isSigned}>book now</button>
                      )
                    ) : (
                      <p class="btn btn-flat deep-purple-text p-1 mx-0 mb-0">
                        Hired
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;

// import React from "react";
// import { Link } from "react-router-dom"
// export default ({ cars }) => {
//   return (
/* <section className=" page-section" id="portfolio">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Cars Available</h2>
        <h3 className="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
              </h3>
      </div>
    </div>
    <div className="row">
      {this.props.cars &&
        this.props.cars.map((car, index) => (
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
            >
              <img
                className="img-fluid"
                src={`https://ipfs.io/ipfs/${car.Image}`}
                alt={car.Image}
              />
            </a>
            <div className="portfolio-caption">
              <h4>{car.Model}</h4>
              <p className="text-muted">{car.Regno}</p>
            </div>
            <ul id="postList" className="list-group list-group-flush">
              <li className="list-group-item">
                <p>{car.Model}</p>
              </li>
              <li key={index} className="list-group-item py-2">
                Rate:{" "}
                {window.web3.utils.fromWei(car.Rate.toString(), "Ether")}{" "}
                      ETH
                    </li>
              <li>
                {car.Status === "Available" ? (
                  this.props.authorized ? (
                    <Link
                      to={{
                        pathname: "/Booking",
                        state: {
                          model: car.Model,
                          reg: car.Regno,
                          image: car.Image,
                          rate: car.Rate.toString(),
                          id: car.id.toString(),
                        },
                      }}
                    >
                      <button onClick={this.isSigned}>book now</button>
                    </Link>
                  ) : (
                      <button onClick={this.isSigned}>book now</button>
                    )
                ) : (
                    <p>Hired</p>
                  )}
              </li>
            </ul>
          </div>
        ))}
    </div>
  </div>
</section> */
//   );
// };

///////////////////////////////////
//////////////////////////////////////

/* <div>
  <Container className="carlist ml-auto">
    <Row>
      <h2>Cars Available</h2>
    </Row>
    <Row>
      {this.props.cars.map((car, key) => {
        return (
          <Col xs={10} md={4}>
            <div className="card" key={key}>
              <img
                src={`https://ipfs.io/ipfs/${car.Image}`}
                alt={car.Image}
                height="300"
                width="300"
              />
             
              <div className="card-header">
                <small className="text-muted">{car.id.toString()}</small>
              </div>
              <ul id="postList" className="list-group list-group-flush">
                <li className="list-group-item">
                  <p>{car.Model}</p>
                </li>
                <li key={key} className="list-group-item py-2">
                  Rate:{" "}
                  {window.web3.utils.fromWei(
                    car.Rate.toString(),
                    "Ether"
                  )}{" "}
                        ETH
                      </li>
                <li>
                  {car.Status === "Available" ? (
                    this.props.authorized ? (
                      <Link
                        to={{
                          pathname: "/Booking",
                          state: {
                            model: car.Model,
                            reg: car.Regno,
                            image: car.Image,
                            rate: car.Rate.toString(),
                            id: car.id.toString(),
                          },
                        }}
                      >
                        <button onClick={this.isSigned}>book now</button>
                      </Link>
                    ) : (
                        <button onClick={this.isSigned}>book now</button>
                      )
                  ) : (
                      <p>Hired</p>
                    )}
                </li>
              </ul>
            </div>
          </Col>
        );
      })}
    </Row>
    <p>&nbsp;</p>
  </Container>
</div> */
