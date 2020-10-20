import React, { Component } from 'react';
import ProductConsumer from '../context';
import { Link } from 'react-router-dom';
import '../App.css';

export default class SoftSetes extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { Furniture } = value;
                        return (
                            <div className="Products_Cards">
                                {
                                    Furniture.map(softset => {
                                        if (softset.category === "softset") {
                                            return (
                                                <div key={softset.id} className="ProductCard">
                                                    <div className="overlayTop">
                                                        <Link className="link buynow" to="register">indi al</Link>
                                                    </div>
                                                    <img src={softset.image} className="Productİmg" />
                                                    <p className="ProductName">{softset.name}</p>
                                                    <div className="overlayBottom">
                                                        <p className="product_price">{softset.price}</p>
                                                        <p className="AboutProduct">{softset.aboutinfo}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
