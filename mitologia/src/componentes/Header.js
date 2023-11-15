import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiLightningBoltOutline } from '@mdi/js';
import { mdiAlphabetGreek } from '@mdi/js';
import './Styles/Header.scss'

export default class Header extends Component {
    componentDidMount() {
        const div = document.querySelector('header')
        window.addEventListener('scroll', function () {
            if (div && window.scrollY > 10) {
                div.classList.add('color')
            } else if (div) {
                div.classList.remove('color')
            }
        })
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="Titulo">
                        <h1>Mitología</h1>
                    </div>
                    <nav id="Menu">
                        <a href='/dioses'>
                            <Icon path={mdiLightningBoltOutline} title="DIOSES" size={1} color="white" />
                            <span>DIOSES GRIEGOS</span>
                        </a>

                        <a href='/mitos'>
                            <Icon path={mdiAlphabetGreek} title="MITOS" size={1} color="white" />
                            <span>MITOS GRIEGOS</span>
                        </a>
                    </nav>
                </nav>
            </header>
        );
    }
};
