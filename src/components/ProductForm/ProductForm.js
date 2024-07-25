// src/components/ProductForm.js
import React, { useEffect, useState } from 'react';
import { createProduct, updateProduct } from '../../apiservice';
import './productform.css'

const ProductForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      updateProduct(product.id, formData)
        .then(onClose)
        .catch(error => console.error('Error updating product:', error));
    } else {
      createProduct(formData)
        .then(onClose)
        .catch(error => console.error('Error creating product:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <button type="submit">{product ? 'Update' : 'Create'} Product</button>
    </form>
  );
};

export default ProductForm;
