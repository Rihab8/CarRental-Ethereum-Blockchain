import React, { Component } from "react";
import "./styles/App.css";
import Web3 from "web3";

class Trns extends Component {
  async componentWillMount() {
    // Load Web3
    let web3 = new Web3("http://127.0.0.1:7545");

    // Fetch latest block
    let latestBlock = await web3.eth.getBlock("latest");
    console.log("latest block", latestBlock);
    this.setState({
      blockNumber: latestBlock.number,
      difficulty: latestBlock.difficulty,
    });

    // Fetch Gas price
    let gasPrice = await web3.eth.getGasPrice();
    console.log("gasPrice", gasPrice);
    this.setState({
      gasPrice: gasPrice,
    });

    // Fetch latest 10 blocks
    let block;
    let latestBlocks = [];
    for (let i = 0; i < 3; i++) {
      block = await web3.eth.getBlock(latestBlock.number - i);
      console.log(block);
      latestBlocks.push(block);
    }
    this.setState({
      latestBlocks: latestBlocks,
    });

    this.setState({
      time: new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(block.timestamp),
    });
  }

  //  let receipt = web3.eth.getTransactionReceipt('')
  //   console.log('gasPrice', receipt)
  //   this.setState({
  //     gasPrice: gasPrice
  //   })

  constructor(props) {
    super(props);
    this.state = {
      blockNumber: 0,
      difficulty: 120,
      gasPrice: 0,
      latestBlocks: [],
      time: "",
    };
  }

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
                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>Latest Block</h5>
                      <p>{this.state.blockNumber}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>Difficulty</h5>
                      <p>{this.state.difficulty}</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>Gas Price</h5>
                      <p>{this.state.gasPrice}</p>
                    </div>
                  </div>
                </div>

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
                              <th scope="col">#</th>
                              <th scope="col">Hash</th>
                              <th scope="col">Timestamp</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.latestBlocks.map((block, key) => {
                              return (
                                <tr key={key}>
                                  <th scope="row">{block.number}</th>
                                  <td>{block.hash.substring(0, 20)}...</td>
                                  <td>{block.timestamp}</td>
                                </tr>
                              );
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

export default Trns;
