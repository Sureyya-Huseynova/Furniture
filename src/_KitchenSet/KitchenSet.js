import React, { Component } from 'react';
import ProductConsumer from '../context';
import { Link } from 'react-router-dom';
import '../App.css';

export default class KitchenSet extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { Furniture } = value;
                        return (
                            <div className="ProductsCards">
                                {
                                    Furniture.map(kitchenset => {
                                        if (kitchenset.category === "kitchhen") {
                                            return (
                                                <div key={kitchenset.id} className="ProductCard">
                                                    <div className="OverlayTop">
                                                        <Link className="link BuyNow" to="register">indi al</Link>
                                                    </div>
                                                    <img src={kitchenset.image} className="Productİmg" />
                                                    <p className="ProductName">{kitchenset.name}</p>
                                                    <div className="OverlayBottom">
                                                        <p className="ProductPrice">{kitchenset.price}</p>
                                                        <p className="AboutProduct">{kitchenset.aboutinfo}</p>
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
