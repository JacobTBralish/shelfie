import React from 'react';

const Product = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
             <img src={props.img} alt={'props.name'} />
             <p>${props.price}</p>
             <button onClick={() => props.handleDelete( props.id )}> Delete </button>
        </div>
    )
}


export default Product;