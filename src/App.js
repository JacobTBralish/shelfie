import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name:'',
      price:'',
      img:'',
      inventory: []
    }

    this.handleDelete = this.handleDelete.bind(this);
    
  }

  componentDidMount(){
    axios.get('/api/inventory').then(response => {
      this.setState({ inventory: response.data})
    }).catch(error => console.log(error))
}
  handlePost( name, price, img ){
    axios.post('/api/inventory', {name, price, img}).then(response => {
      this.setState( { inventory: response.data } )
    }).catch(error => console.log(error))
  }

  handleDelete( id ){
    axios.delete(`/api/inventory/${ id}`).then( response => {
      this.setState({
      inventory: response.data
    })
  }).catch(error => console.log(error))
  }





  handleInput(key, value){
    this.setState({
      [key]: value
    })
  }


  handleCancel(){
    this.setState({
      img: '',
      name: '',
      price:'',

    })
   

  }




  render() {
  // let baseState = this.state
  let { img, name, price } = this.state;

  // mappedInventory = inventory 





    return (
      <div className="App">

        <div>

          Image URL:<input type='text' value={img} onChange={ e => this.handleInput('img', e.target.value )} />

          Product Name:<input type='text' value={name} onChange={ e => this.handleInput( 'name', e.target.value )} />

          Price:<input type='text' value={price} onChange={e => this.handleInput( 'price', e.target.value )} />

          <button onClick={ e => this.handleCancel(e) } type='sumbit' >Cancel</button>

          <button onClick={() => this.handlePost( name, price, img ) }>Add to Inventory</button>


        <Dashboard inventory={this.state.inventory} handleDelete={this.handleDelete} />

        <Form />

        <Header />

        </div>

      </div>

    );
  }
}

export default App;
