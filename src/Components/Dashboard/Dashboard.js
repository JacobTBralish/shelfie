import React, { Component } from 'react'
// import Product from './Components/Product/Product';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            productArr: []
        }
    }

    render() {

    // let mappedProduct = this.state.productArray.map((e, index) =>{
    //         return(<h2 key= {index}>{e}</h2>)
    // })
    

    
        return (
          <div className="dashboard">
          <div>
              Dashboard
          </div>
          <Product />
          {/* {mappedProduct} */}
          </div>
        );
    }}
