import React, { Component } from "react";
import "./styles/App.css";
import Navs from "./Navs";
export class Starter extends Component {
  render() {
    return (
      <div>
        <div>
          <Navs />
        </div>
        <section className="page-section" id="service">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Why Ether Car?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Sunt ut voluptatum eius
                  sapiente, totam reiciendis temporibus qui quibusdam,
                  recusandae sit vero unde, sed, incidunt et ea quo dolore
                  laudantium consectetur!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Our Amazing Team
                </h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member ">
                  <img className="mx-auto rounded-circle" src="" alt="" />
                  <h4>Akhilesh Nair</h4>
                  <p className="text-muted">Lead Designer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="" alt="" />
                  <h4>Nelson Chacko</h4>
                  <p className="text-muted">Lead Marketer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={require("../components/images/rihab.jpg")}
                    alt=""
                  />
                  <h4>Rihab Kasim</h4>
                  <p className="text-muted">Lead Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#something">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="main-footer mb-2">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <h4>Rihab Kasim</h4>
                <img src="./logo.png" alt="hey" />
                <ul className="list-unstyled">
                  <li>Rihab</li>
                  <li>Kasim</li>
                  <li>RIhab</li>
                  <li>KAsim</li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6">
                <h4>Rihab Kasim</h4>
                <ul className="list-unstyled">
                  <li>Rihab</li>
                  <li>Kasim</li>
                  <li>RIhab</li>
                  <li>KAsim</li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6">
                <h4>Rihab Kasim</h4>
                <ul className="list-unstyled">
                  <li>Rihab</li>
                  <li>Kasim</li>
                  <li>RIhab</li>
                  <li>KAsim</li>
                </ul>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Ether Car - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Starter;
