import React, { Component } from 'react'
import Product from '../Product/Product';

export default class Dashboard extends Component {
    render() {


        let displayProducts= this.props.inventory.map((item, index) => {
            return <div key={ index }>
                        <Product {...item} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}/>
                    </div>
      })
    

    
        return (
          <div className="dashboard">
          <div>
              Dashboard
          </div>
            { displayProducts }
          </div>
        );
    }}
