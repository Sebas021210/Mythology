import React, { Component } from "react";
import './Styles/Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="Logo">
                    <h1>MITOLOGIA</h1>
                </div>
                <br></br>
                <div className="firstText">
                    <p>Sebastián Solorzano 21826</p>
                    <p>Pensamiento clásico y mitología</p>
                </div>
                <div className="secondText">
                    <p>© Todos los derechos reservados.</p>
                </div>
            </footer>
        )
    }
}
