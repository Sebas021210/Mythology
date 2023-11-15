import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Styles/Movies.scss'

import img1SW from '../images/starwars/img1SW.jpg'

import zeus from '../imagenes/dioses/zeus.png'
import poseidon from '../imagenes/dioses/poseidon.png'
import hades from '../imagenes/dioses/hades.png'
import aphrodite from '../imagenes/dioses/aphrodite.png'
import ares from '../imagenes/dioses/ares.png'
import hermes from '../imagenes/dioses/hermes.png'
import artemis from '../imagenes/dioses/artemis.png'
import dionisio from '../imagenes/dioses/dionisio.png'
import apolo from '../imagenes/dioses/apollo.png'
import atenea from '../imagenes/dioses/atenea.png'
import hera from '../imagenes/dioses/hera.png'
import demeter from '../imagenes/dioses/demeter.png'

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDiosModal: false,
            showMitoModal: false,
            selectedDios: null,
            selectedMito: null
        };
    }

    handleCloseDios = () => {
        this.setState({ showDiosModal: false });
    }

    handleShowDios = (dios) => {
        this.setState({ showDiosModal: true, selectedDios: dios, showMitoModal: false });
    }

    handleCloseMito = () => {
        this.setState({ showMitoModal: false });
    }

    handleShowMito = (mito) => {
        this.setState({ showMitoModal: true, selectedMito: mito, showDiosModal: false });
    }

    render() {
        const diosesInfo = [
            {
                nombre: "Zeus",
                info: "Zeus era considerado el padre de todas las deidades y de los mortales en la tierra. Al dominar el trueno, los relámpagos y la lluvia obtuvo el título de dios del cielo. Por su poder se encargaba de controlar el orden, la justicia y el destino de todo y todos.",
                secondInfo: "Es reconocido por los historiadores por su capacidad de adoptar cualquier forma y por la cantidad de amantes que tuvo. Esto hizo que tuviera una amplia descendencia, tanto con diosas como con mortales.",
                img: zeus
            },
            {
                nombre: "Poseidon",
                info: "Tenía el poder de controlar el agua, los caballos y los terremotos. Se le suele representar con una cola de sirena y con un tridente en su mano, precisamente, esa es la arma que usa para reinar.",
                secondInfo: "Era hermano de Zeus y uno de los dioses griegos originales.",
                img: poseidon
            },
            {
                nombre: "Hades",
                info: "Aunque puede no ser considerado como un dios del Olimpo, era hermano de Zeus y de Poseidón, por lo que hizo parte de la lucha contra los titanes. Puede ser confundido con la figura del diablo de la creencia cristiana, sin embargo, este no está cargado de maldad sino que cumplía su papel de controlar el inframundo.",
                secondInfo: "Según cuenta la mitología, la soledad a la que fue relegado lo llevó a secuestrar a Perséfone, hija de Zeus, y obligarla a casarse con él. Esta diosa recibió el título de Reina del inframundo.",
                img: hades
            },
            {
                nombre: "Aphrodite",
                info: "Afrodita nació de entre las olas del mar y cautivó con su belleza a quienes lo presenciaron. Los historiadores explican que se casó con Hefesto, con quien realmente no deseaba estar, por lo que era amante de Ares.",
                secondInfo: "",
                img: aphrodite
            },
            {
                nombre: "Ares",
                info: "Se diferencia de Atenea porque su capacidad bélica más que estar direccionada a la estrategia, lo está a la agresividad y a la sangre. Por lo tanto representa la naturaleza terrorífica de la guerra y la violencia.",
                secondInfo: "Se suele simbolizar por la serpiente, el perro, el jabalí y, también, por elementos de batalla como el escudo, la lanza y la espada.",
                img: ares
            },
            {
                nombre: "Hermes",
                info: "Como su título lo dice todo, era reconocido como el mensajero de los dioses y el dios de los ladrones, los negociantes y el comercio. Precisamente, los mitos narran que fue al inframundo a negociar con Hades la libertad de Perséfone, algo que consiguió.",
                secondInfo: "",
                img: hermes
            },
            {
                nombre: "Artemis",
                info: "Es la hermana melliza de Apolo y se le reconoce como la deidad de la caza y la vida silvestre. Según los relatos mitológicos, de pequeña le pidió a Zeus la virginidad eterna, por lo que representa la falta de deseo sexual.",
                secondInfo: "Su cercanía con la naturaleza la llevó a ser considerada la diosa de la caza, los animales, el tiro con arco y el parto.",
                img: artemis
            },
            {
                nombre: "Dionisio",
                info: "Se le conocía como el dios de las festividades, la danza, los placeres, los excesos y la agricultura.",
                secondInfo: "La mitología griega cuenta que Dioniso nació dos veces; primero como mortal y luego, gracias a que su padre era Zeus, como dios.",
                img: dionisio
            },
            {
                nombre: "Apolo",
                info: "Se trata del hermano gemelo de Artemisa y representa la belleza y la perfección. Además de ser el dios del sol, también era protector de la medicina, la música y del tiro con arco.",
                secondInfo: "Se considera un punto medio entre lo sano y lo insano.",
                img: apolo
            },
            {
                nombre: "Atenea",
                info: "Era hija de Zeus y, según las narraciones, él se tragó a su madre mientras aún estaba en embarazo y ella nació de la cabeza de su padre. Se le denomina también la diosa de la guerra estratégica porque desde su parto vestía una armadura.",
                secondInfo: "Atenas llevaba su nombre debido a su cualidad de protectora y por las capacidades que tenía para la defensa y las artes. Se suele simbolizar con el olivo y la lechuza.",
                img: atenea
            },
            {
                nombre: "Hera",
                info: "Esta deidad era esposa y hermana de Zeus, por ello que se consideraba la diosa del Olimpo, del matrimonio, de la familia y de la fertilidad. Tuvo cuatro hijos: Ares, Ilitía, Hebe y Hefesto.",
                secondInfo: "Su figura representaba el resguardo de las mujeres y, debido a su relación con Zeus, era percibida como una diosa celosa y vengativa, pero también protectora.",
                img: hera
            },
            {
                nombre: "Demeter",
                info: "Es la diosa griega de la agricultura, el grano y la fertilidad. A menudo se representa a Deméter sosteniendo una gavilla de trigo o una cornucopia, que simboliza su asociación con la abundancia de la tierra.",
                secondInfo: "Ella es reverenciada como dadora de vida y proveedora de alimento, y está asociada con los ciclos del mundo natural, particularmente el cambio de las estaciones.",
                img: demeter
            }
        ];

        const mitosInfo = [
            {
                nombre: "La manzana de la discordia",
                info: "Cuando Peleo, padre de Aquiles, iba a casarse con la diosa del mar, Tetis, Zeus no invitó a Eris, la diosa de la discordia. Al enterarse, la diosa se presentó en la ceremonia, se acercó a las diosas Afrodita, Atenea y Hera y dejó sobre su mesa una manzana que llevaba inscrita la frase “Para la más hermosa”. Las tres comenzaron a disputarse el presente y nombraron a Zeus juez del asunto. Zeus no aceptó y, en su lugar, encargó a Hermes buscar a Paris, príncipe de Troya y pastor, para que tomara la decisión.",
                secondInfo: "Las diosas comenzaron a desfilar ante Paris y a hacerle promesas. Hera le prometió poder y riquezas, y Atenea, sabiduría y triunfo en las guerras. Pero Afrodita le prometió el amor de la mujer que eligiera, con lo que obtuvo la manzana. Paris le pidió el amor de Helena, hija del rey Menelao de Esparta, a quien raptó, desatando la guerra de Troya.",
                img: img1SW
            },
            {
                nombre: "Guerra de troya",
                info: "La Guerra de Troya se desencadenó debido al rapto de Helena, la esposa de Menelao, por Paris, príncipe troyano. Este acto provocó la ira de los griegos, liderados por Agamenón y Aquiles.",
                secondInfo: "Después de un largo asedio de diez años, los griegos idearon el famoso caballo de madera como estratagema para infiltrarse en Troya. La ciudad fue saqueada y destruida, poniendo fin a la guerra.",
                img: img1SW
            },
            {
                nombre: "El caballo de troya",
                info: "Los griegos construyeron un caballo gigante de madera y se escondieron dentro, mientras el ejército fingía irse. Troya pensaba que el caballo era un regalo de la diosa Atenea pero al llegar la noche los soldados griegos salieron del caballo, abrieron las puertas de la ciudad y saquearon Troya.",
                secondInfo: "Los griegos se llevaron a Helena, mataron al rey de Troya y quemaron completamente la ciudad de Troya, terminando así la guerra.",
                img: img1SW
            },
            {
                nombre: "La aventura de odiseo",
                info: "El viaje de Odiseo en su regreso a Ítaca después de la Guerra de Troya. Odiseo enfrenta numerosos desafíos y obstáculos, incluyendo encuentros con criaturas mitológicas como los cíclopes, las sirenas y la hechicera Circe. Su astucia y valentía lo ayudan a superar estas pruebas.",
                secondInfo: "Mientras tanto, en Ítaca, su esposa Penélope lucha contra pretendientes que buscan casarse con ella, creyendo que Odiseo ha muerto. Después de un viaje lleno de aventuras que dura diez años, Odiseo finalmente regresa a Ítaca, donde, con la ayuda de su hijo Telémaco, planea y ejecuta la venganza contra los pretendientes.",
                img: img1SW
            },
            {
                nombre: "Ulises y las sirenas",
                info: "Ulises ordenó a sus marinos tapar sus oídos con cera. Pero como también sentía una enorme curiosidad por escuchar aquel canto, prefirió atarse a sí mismo a un mástil y pedir a la tripulación que ignorase cualquier súplica para desatarlo.",
                secondInfo: "Una vez en alta mar, las sirenas comenzaron su canto. Ulises se desesperó, pero sus marinos obedecieron la orden y todos se salvaron. Las sirenas, despechadas, se arrojaron al mar. El cuerpo de la sirena Parténope fue llevado hasta una orilla, donde levantaron un monumento en su honor.",
                img: img1SW
            },
            {
                nombre: "Crono y el nacimiento de los dioses olímpicos",
                info: "Después de castrar a Urano (el Cielo), Crono (Saturno) no demoró en convertirse en un déspota como Urano. Tomó por esposa a su hermana, Rea y procrearon a la primera generación de dioses: Hera, Deméter, Hestia, Poseidón y Hades. Resintiendo un levantamiento de sus hijos en su contra, Crono los devoraba tan pronto nacían.",
                secondInfo: "Cuando Rea engendró a Zeus, lo alumbró en secreto y lo entregó a los cuidados de Gea. Al crecer, Zeus se hizo emplear como copero de Cronos. Un día, le preparó al titán del tiempo un brebaje, tras el cual vomitó a todos los dioses. Los hermanos se unieron en contra de los titanes bajo el liderazgo de Zeus, a quienes vencieron y desterraron al Tártaro.",
                img: img1SW
            },
            {
                nombre: "Nacimiento de afrodita",
                info: "Crono castró a su padre, Urano, con una hoz que le había hecho Gea. Los órganos reproductivos de Urano cayeron al mar. Al contacto y roce con estos, el mar formó espuma y se engendró a Afrodita, diosa del Amor y la sensualidad, quien emergió en un cuerpo de mujer adulta, poseedora de una belleza sin par.",
                secondInfo: "Con el soplo del Viento (los Céfiros), Afrodita fue llevada sobre una concha marina hasta dos paradas: la primera, Citera, y la segunda, la orilla de Chipre. Una vez en Chipre, Afrodita fue recibida por las Estaciones (llamadas las Horas), quienes la condujeron a la llamada estancia de los Inmortales.",
                img: img1SW
            },
            {
                nombre: "El rapto de Perséfone",
                info: "Perséfone era la hija única de Deméter (diosa de la agricultura), quien la había procreado con Zeus. Al crecer, su tío Hades, dios del inframundo, se empeñó en poseerla, así que la raptó un día en que Perséfone recogía un narciso.",
                secondInfo: "Deméter escuchó su grito desde el inframundo, y la buscó incansablemente. Renunció a su divinidad hasta que Hades la devolviera. Como la presencia de Deméter entre los mortales hacía estéril la tierra, Zeus exigió la devolución de Perséfone. Hades accedió a condición de que Perséfone se mantuviera en ayunas hasta salir del inframundo.",
                img: img1SW
            }
        ]

        return (
            <div>
                <div className="container">
                    <div className="movies">
                        <h1 className="title">DIOSES GRIEGOS</h1>
                        <div className="movies-list-grande">
                            <div className="card-container-grande">
                                {diosesInfo.map((dios, index) => (
                                    <div key={index} className="card-grande" onClick={() => this.handleShowDios(dios)}>
                                        <img src={dios.img} className="card-img-grande" alt={dios.nombre} />
                                    </div>
                                ))}
                            </div>
                            <Modal show={this.state.showDiosModal} onHide={this.handleCloseDios} style={{ color: "black" }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{this.state.selectedDios && this.state.selectedDios.nombre}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {this.state.selectedDios && this.state.selectedDios.info}
                                    <br></br>
                                    <br></br>
                                    {this.state.selectedDios && this.state.selectedDios.secondInfo}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleCloseDios}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>

                <br></br>

                <div className="secondContainer">
                    <div className="movies">
                        <h1 className="title">MITOS GRIEGOS</h1>
                        <div className="movies-list-grande">
                            <div className="card-container-grande">
                                {mitosInfo.map((mito, index) => (
                                    <div key={index} className="card-grandeMitos" onClick={() => this.handleShowMito(mito)}>
                                        <h1>Mito:</h1>
                                        <h3>{mito.nombre}</h3>
                                    </div>
                                ))}
                            </div>
                            <Modal show={this.state.showMitoModal} onHide={this.handleCloseMito} style={{ color: "black" }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{this.state.selectedMito && this.state.selectedMito.nombre}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {this.state.selectedMito && (
                                        <div>
                                            <img src={this.state.selectedMito.img} alt={this.state.selectedMito.nombre} style={{ maxWidth: "100%" }} />
                                            <br />
                                            {this.state.selectedMito.info}
                                            <br />
                                            <br />
                                            {this.state.selectedMito.secondInfo}
                                        </div>
                                    )}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleCloseMito}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
