import React, { Component } from 'react';
import './RegisterStyle.css';

export default class Registr extends Component {
    state = {
        name: "",
        surname: "",
        phoneNumber: "",
        mail: "",
        cardNumber: "",
        password: "",
        cardPassword: "",
        repeatpassword: "",
        empty: "",
        formail: "",
        forpassword: ""
    }
    handleInputname = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleInputsurname = (e) => {
        this.setState({
            surname: e.target.value
        })
    }
    handleInputphoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }
    handleInputMail = (e) => {
        this.setState({
            mail: e.target.value
        })
    }
    handleInputCardnumber = (e) => {
        this.setState({
            cardNumber: e.target.value
        })
    }
    handleInputCardPassword = (e) => {
        this.setState({
            cardPassword: e.target.value
        })
    }
    handleInputMailPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleInputMailPasswordRepeat = (e) => {
        this.setState({
            repeatpassword: e.target.value
        })
    }
    handleSubmit = (e) => {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (this.state.name.length < 1 || this.state.surname.length < 1 || this.state.phoneNumber.length < 1 || this.state.cardNumber.length < 1) {
            this.setState({
                empty: "Xananı doldurun"
            })
            e.target.style.backgroundColor = "red";
        }
        else if (regex.test(this.state.mail) === false) {
            this.setState({
                formail: "Email duzgun daxil edin [ @/./com/ru ]"
            })
            e.target.style.backgroundColor = "red";
        }
        else if (this.state.password !== this.state.repeatpassword) {
            this.setState({
                forpassword: "Shifreni duzgun daxil edin."
            })
            e.target.style.backgroundColor = "red";
        }
        else {
            this.setState({
                formail: "",
                forpassword:""
            })
            e.target.style.backgroundColor = " rgb(62, 212, 2)";
            console.log(this.state.formail);
            console.log(this.state.forpassword)
        }
    }
    render() {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <form action="fdddd/dd">
                    <div>
                        <p>Adınızı daxil edin.</p>
                        <input type="text" placeholder={this.state.empty} value={this.state.name} onChange={this.handleInputname} />
                    </div>
                    <div>
                        <p>Telefon nömrənizi daxil edin.</p>
                        <input placeholder={this.state.empty} value={this.state.phoneNumber} onChange={this.handleInputphoneNumber} />
                    </div>
                    <div>
                        <p>Soyadınızı daxil edin.</p>
                        <input type="text" placeholder={this.state.empty} value={this.state.surname} onChange={this.handleInputsurname} />
                    </div>
                    <div>
                        <p>Email ünvanınızı daxil edin.</p>
                        <input type="mail" placeholder={this.state.empty} value={this.state.mail} onChange={this.handleInputMail} />
                        <p className="error">{this.state.formail}</p>
                    </div>
                    <div>
                        <p>Kart nömrənizi daxil edin.</p>
                        <input placeholder={this.state.empty} value={this.state.cardNumber} onChange={this.handleInputCardnumber} />
                    </div>
                    <div>
                        <p>Parolu daxil edin.</p>
                        <input type="password" placeholder={this.state.empty} value={this.state.password} onChange={this.handleInputMailPassword} />
                    </div>
                    <div>
                        <p>Kart şifrəsini daxil edin.</p>
                        <input placeholder={this.state.empty} value={this.state.cardPassword} onChange={this.handleInputCardPassword} />
                    </div>
                    <div>
                        <p>Parolu təkrar daxil edin.</p>
                        <input type="password" placeholder={this.state.empty} value={this.state.repeatpassword} onChange={this.handleInputMailPasswordRepeat} />
                        <p className="error">{this.state.forpassword}</p>
                    </div>
                    <div className="submit" onClick={this.handleSubmit}> Təsdiq Et</div>
                </form>
                <div className="registrkitchen"></div>
             
                <div className="three_offer">
                    <div className="offer_div">
                        <p className="offer_icon">
                            <i className="fas fa-bus-alt"></i>
                        </p>
                        <p className="offer_name">Güvənli çatdırılma.</p>
                        <p className="offer">Sizin sifarişləriniz ən qısa zamanda çatdırılacaq.</p>
                    </div>
                    <div className="offer_div">
                        <p className="offer_icon">
                            <i className="fas fa-arrow-alt-circle-down"></i>
                        </p>
                        <p className="offer_name">Güvənli çatdırılma.</p>
                        <p className="offer">Sizin sifarişləriniz ən qısa zamanda çatdırılacaq.</p>
                    </div>
                    <div className="offer_div">
                        <p className="offer_icon">
                            <i className="fas fa-award"></i>
                        </p>
                        <p className="offer_name">Güvənli çatdırılma.</p>
                        <p className="offer">Sizin sifarişləriniz ən qısa zamanda çatdırılacaq.</p>
                    </div>
                </div>
            </div>
        )
    }
}
