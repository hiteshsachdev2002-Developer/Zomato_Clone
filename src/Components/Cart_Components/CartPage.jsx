import { useSelector,useDispatch } from "react-redux";
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import {removeItem,CleanCart} from '../../ReduxStore/Slice/cartSlice';


function CartPage() {

    const cartItems = useSelector((store)=>store.cart.cartItems);
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);
    const dispatch = useDispatch();
    console.log(cartItems);
  
    return(
        <>
            <div className="cart-container">
            <h1 className="cart-title">
                <FaShoppingCart className="cart-icon" /> Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <p className="empty-cart-text">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="item-details">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div>
                                        <h2 className="item-name">{item.name}</h2>
                                        <p className="item-price">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => dispatch(removeItem(item))}
                                    className="remove-btn"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-footer">
                        <p className="total-amount">Total: ${totalAmount.toFixed(2)}</p>
                        <button
                            onClick={() => dispatch(CleanCart())}
                            className="clear-cart-btn"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
        </>
    )

}

export default CartPage;