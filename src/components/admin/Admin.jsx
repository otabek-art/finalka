import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.scss';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    oldPrice: '',
    reviews: '',
    image: '',
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/products', {
        ...newProduct,
        price: parseFloat(newProduct.price),
        oldPrice: parseFloat(newProduct.oldPrice),
        reviews: parseInt(newProduct.reviews, 10),
      });
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: '', oldPrice: '', reviews: '', image: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin">
      <h1>Admin Panel</h1>
      <div className="product-form">
        <h2>Add New Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Old Price"
          value={newProduct.oldPrice}
          onChange={(e) => setNewProduct({ ...newProduct, oldPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Reviews"
          value={newProduct.reviews}
          onChange={(e) => setNewProduct({ ...newProduct, reviews: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="product-list">
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>
                <strong>{product.name}</strong> - ${product.price} 
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
