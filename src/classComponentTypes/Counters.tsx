import { Component } from "react";
// import { render } from "react-dom";

type CounterProps = {
    message: string;
}

type CounterState = {
    count: number;
}

// the count value is 5
export class Counters extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "20px" }}>
        <div>
            {this.props.message} {this.state.count}
        </div>
        <div>
          <button onClick={this.handleClick} >Increment</button>
        </div>
      </div>
    );
  }
}
