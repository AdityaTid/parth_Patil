import React from 'react';

const products = [
    { id: 1, name: 'Split AC', price: 30000, image: 'path/to/image1.jpg' },
    { id: 2, name: 'Window AC', price: 25000, image: 'path/to/image2.jpg' },
    { id: 3, name: 'Portable AC', price: 20000, image: 'path/to/image3.jpg' },
    { id: 4, name: 'Inverter AC', price: 35000, image: 'path/to/image4.jpg' },
];

const ProductList = () => {
    return (
        <div className="product-list">
            <h2>Available Air Conditioners</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;