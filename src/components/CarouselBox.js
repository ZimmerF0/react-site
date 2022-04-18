import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import bridgeImg from '../assets/bridge.jpg';
import rainbowImg from '../assets/rainbow.jpg';
import stoneImg from '../assets/stone.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
          className='d-block w-100'
          src={ bridgeImg }
          alt="Bridge"
          />
          <Carousel.Caption>
            <h3>Bridge image</h3>
            <p>lorem sfwsrfsef sefxasdckjij jnuidsfv jsefklsj sefwioejf seekfhoiwsejfmwksf</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
          className='d-block w-100'
          src={ rainbowImg }
          alt="Rainbow"
          />
          <Carousel.Caption>
            <h3>Rainbow image</h3>
            <p>lorem sfwsrfsef sefxasdckjij jnuidsfv jsefklsj sefwioejf seekfhoiwsejfmwksf lorem*10   </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
          className='d-block w-100'
          src={ stoneImg }
          alt="Stone"
          />
          <Carousel.Caption>
            <h3>Stone image</h3>
            <p>lorem sfwsrfsef jsefklsj sefwioejf seekfhoiwsejfmwksf</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
