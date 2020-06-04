import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { withRouter } from "react-router-dom";
export class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      sday: "",
      eday: "",
      day: 0,
    };
    this.changeDay = this.changeDay.bind(this);
  }
  changeDay() {
    this.setState({
      day: Math.abs(this.state.endDate - this.state.startDate) / (1000 * 86400),
    });
  }

  render() {
    const { model } = this.props.location.state;
    const { image } = this.props.location.state;
    const { reg } = this.props.location.state;
    const { id } = this.props.location.state;
    const { rate } = this.props.location.state;
    return (
      <div>
        <img
          src={`https://ipfs.io/ipfs/${image}`}
          alt={image}
          height="300px"
          width="300px"
        />

        <form
          onSubmit={(event) => {
            event.preventDefault(); //prevent from reloading the page
            const name = this.Name.value;
            const id = this.Id.value;
            const phn = this.phn.value;
            this.props.bookCar(
              id,
              name,
              phn,
              rate,
              Intl.DateTimeFormat({
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(this.state.startDate),
              Intl.DateTimeFormat({
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(this.state.endDate),
              this.state.day
            );
          }}
        >
          <div className="form-group mr-sm-2">
            <input
              id="postContent"
              type="text"
              ref={(input) => {
                this.Id = input;
              }}
              className="form-control"
              placeholder="car details"
              defaultValue={id}
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="postContent"
              type="text"
              ref={(input1) => {
                this.Regno = input1;
              }}
              className="form-control"
              placeholder="car details"
              defaultValue={reg}
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
              placeholder="car details"
              defaultValue={model}
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="postContent"
              type="text"
              ref={(input1) => {
                this.Name = input1;
              }}
              className="form-control"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group mr-sm-2">
            <input
              id="postContent"
              type="text"
              ref={(input1) => {
                this.phn = input1;
              }}
              className="form-control"
              placeholder="Mobile Number"
              required
            />
          </div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            } // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            // PropTypes.func.isRequired,
          />
          <button
            type="submit"
            onClick={this.changeDay}
            className="btn btn-primary btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(Booking);
