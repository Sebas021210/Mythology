import React, { Component } from "react";
import Slide from "../componentes/componentsBody/Slide.js"
import Movies from "../componentes/componentsBody/Movies.js"

export default class Body extends Component {
    render() {
        return (
            <div id="Body">
                <Slide />
                <Movies />
            </div>
        );
    }
};
