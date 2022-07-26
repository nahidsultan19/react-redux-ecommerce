import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/state/ProductSlice';
import Product from './Product';

const Products = () => {
    const { isLoading, products, error } = useSelector(state => state.products);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className=''>
            {isLoading && <h2>Loading</h2>}
            {error && <h2>{error}</h2>}
            {products.map(product => <Product key={product.id} product={product}></Product>)}
        </div>
    );
};

export default Products;