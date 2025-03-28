import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  // Filter by category
  const handleFilter = (category) => {
    setCategory(category);
    setSearchQuery(""); // Reset search when filtering by category
    if (category === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  // Search functionality
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="products-page">
      <h2>Products</h2>

      {/* Search Box */}
      <input
        type="text"
        className="search-box"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Filter Buttons */}
      <div className="filter-btn">
        <button onClick={() => handleFilter("")}>All</button>
        <button onClick={() => handleFilter("men's clothing")}>Men</button>
        <button onClick={() => handleFilter("women's clothing")}>Women</button>
        <button onClick={() => handleFilter("jewelery")}>Jewelry</button>
        <button onClick={() => handleFilter("electronics")}>Electronics</button>
      </div>

      {/* Product List */}
      <motion.div 
      initial={{opacity:0,translateX:"100%"}}
      whileInView={{opacity:1, translateX:"0"}}
      transition={{duration:2}}
      className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}/-</p>
              <h5>Ratings: ⭐{product.rating.rate}/5</h5>
              <h5>Reviewed by: 👤{product.rating.count}</h5>
            </Link>
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </motion.div>
    </div>
  );
}

export default ProductsPage;
