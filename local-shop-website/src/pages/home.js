import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductList from '../components/product-list';
import RepairForm from '../components/repair-form';
import './home.css'; // Assuming you have a home.css for specific styles

const Home = () => {
    return (
        <div className="home">
            <Header />
            <main>
                <h1>Welcome to Our AC Shop</h1>
                <p>Your one-stop solution for AC sales and repairs.</p>
                <ProductList />
                <RepairForm />
            </main>
            <Footer />
        </div>
    );
};

export default Home;