import React from 'react'

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked Button Class Constructor {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me Button Class Constructor
          </button>
      </div>
    );
  }
}