import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(){
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    let variable = "TESTTTTT";
    let myBanner;

    if(this.state.isOpen){
      myBanner = <Header banner={this.state.banner}/>
    }
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1> {variable} </h1>
            {myBanner}
          </p>
           <input value = {this.state.banner} onChange={this.textHandler}/>
          <button onClick={this.buttonHandler}>Click Here</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
