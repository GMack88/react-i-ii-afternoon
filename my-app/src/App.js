import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import ControlPanel from "./Components/ControlPanel";
import "./Components/Card.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.nextIndex = this.nextIndex.bind(this);
    this.prevIndex = this.prevIndex.bind(this);
  }
  nextIndex() {
    this.setState({
      index: this.state.index + 1
    });
  }
  prevIndex() {
    this.setState({
      index: this.state.index - 1
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Card index={this.state.index} />
        <ControlPanel
          index={this.state.index}
          prevIndex={this.prevIndex}
          nextIndex={this.nextIndex}
        />
      </div>
    );
  }
}
export default App;
