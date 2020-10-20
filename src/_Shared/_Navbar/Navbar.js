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
                <div className="HeaderSocialIcons">
                    <button className="HeaderSocialIcon HeaderSocialIconFacebook">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="HeaderSocialIcon HeaderSocialIconInstagram">
                        <i className="fab fa-instagram"></i>
                    </button>
                    <button className="HeaderSocialIcon HeaderSocialIconLinkedin">
                        <i className="fab fa-linkedin-in"></i>
                    </button>
                </div>
                <nav>
                    <ul className="NavbarList">
                        <li className="NavbarItem">
                            <Link to="/" className="link">
                                <i className="fas fa-home" style={{ fontSize: "3.2rem" }}></i>
                            </Link>
                        </li>
                        <li className="NavbarItem">
                            <Link to="/SoftSet" className="link">YUMUŞAQ DƏST</Link>
                        </li>
                        <li className="NavbarItem">
                            <Link to="/LivingRoom" className="link">MƏTBƏX DƏSTİ</Link>
                        </li>
                    </ul>
                    <div className="SearchDiv" >
                        <input type="search" className="SearchInput" placeholder="Search products.."
                            onChange={this.props.onClick} onKeyPress={this.SearchInputPressEnter}/>
                        <span onClick={this.props.searchProduct} className="SearchIcon">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
};
