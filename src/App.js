import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';





class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      img:'',
      productName:'',
      price:'',
      baseState: this.state
    }
    
  }
  
  handleInput(key, value){
    this.setState({
      [key]: value
    })
  }
  handleCancel( key, baseState){
    this.setState({
      [key]:baseState
    })

  }




  render() {
  let baseState = this.state
  let { img, productName, price } = this.state;


    return (
      <div className="App">
        <div>
          Image URL:<input type='text' value={img} onChange={ e => this.handleInput('img', e.target.value )} />
          Product Name:<input type='text' value={productName} onChange={ e => this.handleInput( 'productName', e.target.value )} />
          Price:<input type='text' value={price} onChange={e => this.handleInput( 'price', e.target.value )} />
          <button onClick={() => this.handleCancel( baseState)} >Cancel</button>
          <button>Add to Inventory</button>
        <Dashboard />
        <Form />
        <Header />
        </div>
      </div>
    );
  }
}

export default App;
