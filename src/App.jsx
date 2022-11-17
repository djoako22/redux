import { useEffect, useState } from "react";
import "./App.css";
import products from "./products";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cart";

function App() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const { cart } = state;

    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <div className="App">
            <div className="navbar">
                <h3>Redux</h3>
                <button onClick={() => setShowCart(!showCart)}>
                    Cart {cart.items.length}
                </button>
            </div>

            {showCart && (
                <div className="cart">
                    <h3>Cart</h3>
                    {cart.items.length === 0 && <p>Cart is empty</p>}
                    {cart.items.length > 0 && (
                        <div>
                            {cart.items.map((item) => (
                                <div className="cart-item" key={item.name}>
                                    <img src={item.image} alt={item.name} />
                                    <h4>{item.name}</h4>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>

                                    <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                                </div>
                            ))}

                            <p>Total: ${cart.total}</p>

                            <button>Checkout</button>
                        </div>
                    )}
                </div>
            )}
            <div className="products">
                {products.map((product) => (
                    <div className="card" key={product.name}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
