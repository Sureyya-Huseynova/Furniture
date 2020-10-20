import React from 'react';
import './FooterStyle.css';
import { Link } from 'react-router-dom';
import bed2 from "../../_Image/bed2.jpg";

export default function Footer() {
    return (
        <div>
            <p style={{ backgroundColor: " rgba(218, 214, 214, 0.322)", padding: "17px" }}></p>
            <footer>
                <div className="footer_section">
                    <p className="section_name">Üstünlüklərimiz</p>
                    <p>
                        Keyfiyyətə Verdiyimiz Dəyər
                        İnnovasiyalar
                        Yeni Məhsul Layihələndirmə
                        İstehsal Sahələri
                    </p>
                    <p>(012)-586-96-88</p>
                    <p>(055)-586-96-88</p>
                    <span className="footer_social_icon">
                        <i className="fab fa-facebook-f"></i>
                    </span>
                    <span className="footer_social_icon">
                        <i className="fab fa-instagram"></i>
                    </span>
                    <span className="footer_social_icon">
                        <i className="fab fa-linkedin-in"></i>
                    </span>
                </div>
                <div className="footer_section">
                    <p className="section_name">İş Vaxtı</p>
                    <ul className="open_hours_list">
                        < li className="open_hours">
                            <p> Bazar Ertəsi</p>
                            <p >9:00 - 22:00</p>
                        </li>
                        < li className="open_hours">
                            <p>Çərşənbə Axşamı</p>
                            <p >9:00 - 21:00</p>
                        </li>
                        < li className="open_hours">
                            <p>Çərşənbə</p>
                            <p >9:00 - 22:30</p>
                        </li>
                        < li className="open_hours">
                            <p>Cümə Axşamı</p>
                            <p >9:00 - 21:00</p>
                        </li>
                        < li className="open_hours">
                            <p>Cümə</p>
                            <p >9:00 - 20:00</p>
                        </li>
                        < li className="open_hours">
                            <p>Şənbə</p>
                            <p >10:00 - 19:00</p>
                        </li>
                        < li className="open_hours">
                            <p>Bazar</p>
                            <p >10:00 - 22:00</p>
                        </li>
                    </ul>
                </div>
                <div className="footer_section">
                    <p className="section_name">İnstagram</p>
                        <Link to="/intagram"><img src={bed2} className="footimg"/></Link>
                </div>
                <div className="footer_section">
                    <p className="section_name">Məlumat üçün</p>
                    <p>Xüsusi təkliflər, dizayn xidmətləri və Daha çoxu üçün abunə olun</p>
                    <input type="email" className="footer_btn email_input" placeholder="Enter email adress" required />
                    <p className="footer_btn submit_btn">Təsdiq Et</p>
                </div>
            </footer>
            <p className="footend"> ©2020 All rights reserved | This web site is made with  by Sureyya Huseynova</p>
        </div>
    )
}