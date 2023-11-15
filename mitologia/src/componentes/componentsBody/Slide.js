import React, { Component } from "react";
import mitologia1 from "../../imagenes/mitologia1.jpg";
import mitologia3 from "../../imagenes/mitologia3.jpg";
import mitologia4 from "../../imagenes/mitologia4.jpg";
import '../Styles/Slide.scss'

const images = [
  {
    name: 'Image 1',
    image: mitologia1
  },
  {
    name: 'Image 2',
    image: mitologia3
  },
  {
    name: 'Image 3',
    image: mitologia4
  },
];

export default class Slide extends Component {
  componentDidMount() {
    const carousel = document.querySelector('.carousel');
    let sliders = [];
    let slideIndex = 0;
    let intervalId = null;

    const createSlide = () => {
      if (slideIndex >= images.length) {
        slideIndex = 0;
      }

      let slide = document.createElement('div');
      let imgElement = document.createElement('img');
      let content = document.createElement('div');
      let h1 = document.createElement('h1');

      h1.appendChild(document.createTextNode(images[slideIndex].name));
      content.appendChild(h1);
      slide.appendChild(imgElement);
      slide.appendChild(content);
      carousel.appendChild(slide);
      imgElement.src = images[slideIndex].image;

      slide.className = 'slider';
      content.className = 'slide-content';
      h1.className = 'title';

      sliders.push(slide);

      if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
      }
    }

    for (let i = 0; i < 3; i++) {
      slideIndex++;
      createSlide();
    }

    intervalId = setInterval(() => {
      slideIndex++;
      createSlide();
    }, 5000);
  }

  render() {
    return (
      <div className="SliderContainer">
        <div className="carousel"></div>
      </div>
    );
  }
}
