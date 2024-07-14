import React from 'react';
import './Checkout.css';
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../Cart/CartProduct";
import { Link} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/cart">{basket?.length} items</Link>
                        )
                </h1>


                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        {/* <h3>Payment Method</h3> */}
                    </div>
                    <div className="payment__details">
                          
                            <form>
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3 className='order-total'>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                </div>

                             
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;