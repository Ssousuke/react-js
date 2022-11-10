import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  state = {
    name: "Matheus",
    count: 0
  };

  handlePClick = () => {
    this.setState({ name: "Wesley" });
  }

  hendleAClick = (event) => {
    event.preventDefault();
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { name, count } = this.state;

    return (
      <div>
        <h1 onClick={this.handlePClick}>{name}</h1>
        <h1 onClick={this.hendleAClick}>{count}</h1>
      </div>
    );
  }
}

export default App;
