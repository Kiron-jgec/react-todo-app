import React from 'react';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.hadleAddOne = this.hadleAddOne.bind(this);
      this.hadleMinusOne = this.hadleMinusOne.bind(this);
      this.hadleReset = this.hadleReset.bind(this);
      this.state = {
        count: 0,
      };
    }
    componentDidMount() {
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount, 10);
  
      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log("number changed");
  
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
      }
    }
  
    hadleAddOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }
  
    hadleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }
  
    hadleReset() {
      this.setState(() => {
        return {
          count: 0,
        };
      });
  
      // this.setState({ count: 0});
    }
  
    render() {
      return (
        <div className="widget__message widget__message_counter">
          <h1> Count: {this.state.count} </h1>
  
          <button onClick={this.hadleAddOne} className="button counter__buttons"> Add +1</button>
          <button onClick={this.hadleMinusOne} className="button counter__buttons"> Add -1</button>
          <button onClick={this.hadleReset} className="button counter__buttons"> Reset</button>
        </div>
      );
    }
  }


  export default Counter