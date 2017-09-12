import React, { Component } from 'react';
import './App.css';

class App extends Component {
    componentDidMount(){
        console.log(this.props.store);
        this.unSubscribe = this.props.store.subscribe((state)=>{
            this.updateComponent();
        })
    }

    updateComponent(){
        this.forceUpdate();
    }
  render() {
        let counter = this.props.store.getState().counter;
    return (
      <div className="App">
        <div>hello world {counter.value}</div>
      </div>
    );
  }
}

export default App;
