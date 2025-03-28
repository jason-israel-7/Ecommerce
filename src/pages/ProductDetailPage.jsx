import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";  // Import the custom hook
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import man2 from './assets/men-pro1.webp'
import man3 from './assets/men-pro2.webp'
import man4 from './assets/men-pro3.webp'
import man5 from './assets/men-pro4.webp'
import man6 from './assets/men-pro5.webp'
import man7 from './assets/men-pro6.webp'
import { motion } from "framer-motion"; 


function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();  // Get the addToCart function from context

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
  };

  return (
    <>
    <motion.div   initial={{opacity:0,translateX:"100%"}}
      whileInView={{opacity:1, translateX:"0"}}
      transition={{duration:2}} className="product-detail-page">
      <div className="product-img">
      <Carousel>
                <div>
                    <img src={product.image} />
                </div>
                <div>
                    <img src={product.image} />
                </div>
                <div>
                    <img src={product.image} />
                </div>
            </Carousel>
      </div>
      <div className="product-content">
      <h1>{product.title}</h1>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <p>Rating:⭐{product.rating.rate}/5</p>
      <button className="submit-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button className="submit-btn">Share</button>
      <button className="submit-btn">Compare the item</button>
      </div>
    </motion.div>
    <h1 className="coll">Shoppers Stop</h1>
    <div className="shopbysur">
           <div>
            <img src={man2} alt="" />
            <h3>574 Core</h3>
            <h4>RS-10000</h4>
           </div>
           <div>
            <img src={man3} alt="" />
            <h3>Fresh Foam X 1080v14</h3>
            <h4>RS-15000</h4>
           </div>
           <div>
            <img src={man4} alt="" />
            <h3>1960R</h3>
            <h4>RS-12000</h4>
           </div>
           <div>
            <img src={man5} alt="" />
            <h3>9060</h3>
            <h4>RS-13500</h4>
           </div>
           <div>
            <img src={man6} alt="" />
            <h3>Made in USA 990v6</h3>
            <h4>RS-14000</h4>
           </div>
           <div>
            <img src={man7} alt="" />
            <h3>1440 Running Shoes</h3>
            <h4>RS-14000</h4>
           </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
