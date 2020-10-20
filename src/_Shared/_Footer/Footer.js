import React from 'react';
import './FooterStyle.css';
import { Link } from 'react-router-dom';
import bed2 from "../../_Image/bed2.jpg";

export default function Footer() {
    return (
        <div>
            <p style={{ backgroundColor: " rgba(218, 214, 214, 0.322)", padding: "17px" }}></p>
            <footer>
                <div className="FooterSection">
                    <p className="SectionName">Üstünlüklərimiz</p>
                    <p>
                        Keyfiyyətə Verdiyimiz Dəyər
                        İnnovasiyalar
                        Yeni Məhsul Layihələndirmə
                        İstehsal Sahələri
                    </p>
                    <p>(012)-586-96-88</p>
                    <p>(055)-586-96-88</p>
                    <span className="FooterSocialIcon">
                        <i className="fab fa-facebook-f"></i>
                    </span>
                    <span className="FooterSocialIcon">
                        <i className="fab fa-instagram"></i>
                    </span>
                    <span className="FooterSocialIcon">
                        <i className="fab fa-linkedin-in"></i>
                    </span>
                </div>
                <div className="FooterSection">
                    <p className="SectionName">İş Vaxtı</p>
                    <ul className="OpenHoursList">
                        < li className="OpenHours">
                            <p> Bazar Ertəsi</p>
                            <p >9:00 - 22:00</p>
                        </li>
                        < li className="OpenHours">
                            <p>Çərşənbə Axşamı</p>
                            <p >9:00 - 21:00</p>
                        </li>
                        < li className="OpenHours">
                            <p>Çərşənbə</p>
                            <p >9:00 - 22:30</p>
                        </li>
                        < li className="OpenHours">
                            <p>Cümə Axşamı</p>
                            <p >9:00 - 21:00</p>
                        </li>
                        < li className="OpenHours">
                            <p>Cümə</p>
                            <p >9:00 - 20:00</p>
                        </li>
                        < li className="OpenHours">
                            <p>Şənbə</p>
                            <p >10:00 - 19:00</p>
                        </li>
                        < li className="OpenHours">
                            <p>Bazar</p>
                            <p >10:00 - 22:00</p>
                        </li>
                    </ul>
                </div>
                <div className="FooterSection">
                    <p className="SectionName">İnstagram</p>
                        <Link to="/intagram"><img src={bed2} className="FootImg"/></Link>
                </div>
                <div className="FooterSection">
                    <p className="SectionName">Məlumat üçün</p>
                    <p>Xüsusi təkliflər, dizayn xidmətləri və Daha çoxu üçün abunə olun</p>
                    <input type="email" className="FooterBtn EmailInput" placeholder="Enter email adress" required />
                    <p className="FooterBtn SubmitBtn">Təsdiq Et</p>
                </div>
            </footer>
            <p className="FootEnd"> ©2020 All rights reserved | This web site is made with  by Sureyya Huseynova</p>
        </div>
    )
}