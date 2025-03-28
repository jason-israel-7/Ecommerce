import { useContext,useState } from "react";
import { CartContext } from "../context/CartContext";
import women1 from './assets/women-pro7.webp'
import women2 from './assets/women-pro8.webp'
import women3 from './assets/women-pro9.webp'
import women4 from './assets/women-pro10.webp'
import women5 from './assets/women-pro11.webp'
import women6 from './assets/women-pro12.webp'
import women7 from './assets/women-pro13.webp'
import women8 from './assets/women-pro14.webp'

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1); // Initial quantity is 1

  // Function to increase quantity
  const addCount = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity (but not below 1)
  const subCount = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-page">
          {cart.map((item) => (
            <div key={item.id} className="cart-pro">
              <div className="cart-img">
                <img src={item.image} alt={item.title} /> </div>
                <div className="cart-content">
                  <h3>{item.title}</h3>
                  <h4>{item.category}</h4>
                  <h5>{item.description}</h5>
                   <p> <button onClick={()=>subCount()}>-</button> ${item.price*quantity} <button onClick={()=>addCount()}>+</button></p> 
                  <button 
                onClick={() => removeFromCart(item.id)} 
                >
                Remove Item
              </button>
               
              </div>
             
            </div>
          ))}
         
        </div>
      )}
    </div>

    <h2 className="women-head">Women's Collections</h2>
    <div className="women-cloth">
        <div>
           <img src={women1} alt="" />
           <h3>Full Sized T-shirt</h3>
           <h4>RS-5000</h4>
        </div>
        <div>
           <img src={women2} alt="" />
           <h3>Finisher Hoodie Full size</h3>
           <h4>RS-6000</h4>
        </div>
        <div>
           <img src={women3} alt="" />
           <h3>New Balance Hoodie</h3>
           <h4>RS-5000</h4>
        </div>
        <div>
           <img src={women4} alt="" />
           <h3>T-shirt Half sized</h3>
           <h4>RS-3000</h4>
        </div>
        <div>
           <img src={women5} alt="" />
           <h3>Gym Essential Hoddie</h3>
           <h4>RS-5500</h4>
        </div>
        <div>
           <img src={women6} alt="" />
           <h3>Gym Full Sized T-shirt</h3>
           <h4>RS-4000</h4>
        </div>
        <div>
           <img src={women7} alt="" />
           <h3>Half Necked Full sized shirt</h3>
           <h4>RS-5500</h4>
        </div>
        <div>
           <img src={women8} alt="" />
           <h3>New Balance Hoodie Logo Printed</h3>
           <h4>RS-7000</h4>
        </div>
    </div>
    </>
  );
}

export default CartPage;