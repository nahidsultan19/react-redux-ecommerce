import React from 'react';

const Product = (props) => {
    const { title } = props.product;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Product;