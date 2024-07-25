// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Modal from './components/Modal/Modal';
import ProductForm from './components/ProductForm/ProductForm';
import { FaPlus } from 'react-icons/fa';
import './App.css';  // Import your App.css here

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product = null) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Router>
      <div className="container">
        <h1>Product Management</h1>
        <button className="add-product-button" onClick={() => handleOpenModal()}>
          <FaPlus /> Add New Product
        </button>
        <ProductList onEditProduct={handleOpenModal} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ProductForm product={selectedProduct} onClose={handleCloseModal} />
        </Modal>
      </div>
    </Router>
  );
}

export default App;
