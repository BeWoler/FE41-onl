import React from "react";

class HeaderClass extends React.Component {
  state = {
    title: "32423",
    counter: 1,
  };
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div
        onClick={() => {
          this.state.counter = this.state.counter + 1
          this.setState({ counter: this.state.counter + 1})
        }}>
        {this.state.title}
        <div>{this.state.counter}</div>
      </div>
    );
  }
}

export default HeaderClass;
