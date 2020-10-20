import React from 'react';
import {Link } from 'react-router-dom';

const SearchResult = ({ searchstorage }) => {
    const searchresaultdatas = searchstorage.map(searchresaultdata => {
        return (
            <div style={{ fontSize: "20px" }} key={searchresaultdata.id} className="ProductCard">
                <div className="overlayTop">
                    <Link className="link buynow" to="register">indi al</Link>
                </div>
                <img src={searchresaultdata.image} className="Productİmg"/>
                <p className="ProductName">{searchresaultdata.name}</p>
                <div className="overlayBottom">
                    <p className="product_price">{searchresaultdata.price}</p>
                    <p className="AboutProduct">{searchresaultdata.aboutinfo}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="Products_Cards">
            {searchresaultdatas}
        </div>
    )
}
export default SearchResult;