import React, { Component } from 'react';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    SearchInputPressEnter=(e)=>{
        if (e.key === "Enter") {
            this.props.searchProduct();
        }
    }
    render() {
        return (
            <div className="header parallax">
                <div className="header_social_icons">
                    <button className="header_social_icon header_social_icon_button_facebook">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="header_social_icon header_social_icon_button_instagram">
                        <i className="fab fa-instagram"></i>
                    </button>
                    <button className="header_social_icon header_social_icon_button_linkedin">
                        <i className="fab fa-linkedin-in"></i>
                    </button>
                </div>
                <nav>
                    <ul className="navbar_list">
                        <li className="navbar_list_item">
                            <Link to="/" className="link">
                                <i className="fas fa-home" style={{ fontSize: "3.2rem" }}></i>
                            </Link>
                        </li>
                        <li className="navbar_list_item">
                            <Link to="/SoftSet" className="link">YUMUŞAQ DƏST</Link>
                        </li>
                        <li className="navbar_list_item">
                            <Link to="/LivingRoom" className="link">MƏTBƏX DƏSTİ</Link>
                        </li>
                    </ul>
                    <div className="search_div" >
                        <input type="search" className="searchinput" placeholder="Search products.."
                            onChange={this.props.onClick} onKeyPress={this.SearchInputPressEnter}/>
                        <span onClick={this.props.searchProduct} className="searchIcon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
};
