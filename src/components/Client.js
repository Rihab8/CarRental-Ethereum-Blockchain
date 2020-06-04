import React, { Component } from "react";
import "./styles/App.css";

class Client extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div
                className="content mr-auto ml-auto"
                style={{ width: "800px" }}
              >
                <h5>Ethereum Blockchain Explorer</h5>

                <div className="row">
                  <div className="col-lg-12 mt-3">
                    <div className="card">
                      <div className="card-header">
                        <h5>Latest Blocks</h5>
                      </div>
                      <div className="card-body">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Model</th>
                              <th scope="col">startDate</th>
                              <th scope="col">End Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.props.clients.map((client, key) => {
                              if (client.Client === this.props.acc)
                                return (
                                  <tr key={key}>
                                    <th scope="row">{client.bcar}</th>
                                    <td>{client.startDate}...</td>
                                    <td>{client.endDate}</td>
                                  </tr>
                                );
                              return null;
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
