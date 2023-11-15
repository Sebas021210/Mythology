import React, { Component } from "react";
import img1SW from '../images/starwars/img1SW.jpg'
import img2SW from '../images/starwars/img2SW.jpg'
import img3SW from '../images/starwars/img3SW.jpg'
import img4SW from '../images/starwars/img4SW.jpg'
import img5SW from '../images/starwars/img5SW.jpg'
import img6SW from '../images/starwars/img6SW.jpg'
import img7SW from '../images/starwars/img7SW.jpg'
import img8SW from '../images/starwars/img8SW.jpg'
import img9SW from '../images/starwars/img9SW.jpg'
import img10SW from '../images/starwars/img10SW.jpg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Styles/Movies.scss'

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        const dioses = [img1SW, img2SW, img3SW, img4SW, img5SW, img6SW, img7SW, img8SW, img9SW, img10SW];
        const titanes = [img1SW, img2SW, img3SW, img4SW, img5SW, img6SW, img7SW, img8SW, img9SW, img10SW];
        const heroes = [img1SW, img2SW, img3SW, img4SW, img5SW, img6SW, img7SW, img8SW, img9SW, img10SW];
        const mitos = [img1SW, img2SW, img3SW, img4SW, img5SW, img6SW, img7SW, img8SW, img9SW, img10SW];

        return (
            <div>
                <div className="container">
                    <div className="movies">
                        <h1 className="title">DIOSES GRIEGOS</h1>
                        <div className="movies-list-grande">
                            <div className="card-container-grande" onClick={this.handleShow}>
                                {dioses.map((movie, index) => (
                                    <div key={index} className="card-grande">
                                        <img src={movie} className="card-img-grande" alt="" />
                                    </div>
                                ))}
                            </div>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="container">
                    <div className="movies">
                        <h1 className="title">TITANES</h1>
                        <div className="movies-list-grande">
                            <div className="card-container-grande">
                                {titanes.map((movie, index) => (
                                    <div key={index} className="card-grande">
                                        <img src={movie} className="card-img-grande" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="container">
                    <div className="movies">
                        <h1 className="title">HEROES</h1>
                        <div className="movies-list-grande">
                            <div className="card-container-grande">
                                {heroes.map((movie, index) => (
                                    <div key={index} className="card-grande">
                                        <img src={movie} className="card-img-grande" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="container">
                    <div className="movies">
                        <h1 className="title">MITOS GRIEGOS</h1>
                        <div className="movies-list-grande">
                            <div className="card-container-grande">
                                {mitos.map((movie, index) => (
                                    <div key={index} className="card-grande">
                                        <img src={movie} className="card-img-grande" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
