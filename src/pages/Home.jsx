import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselBox />
          <Container>
            <h2 className='text-center m-4'>Our team</h2>
            <CardGroup className='m-4' >
             <Card>
              <Card.Img 
                variant=" m-2" 
                src='https://fb.ru/misc/i/gallery/117828/3064486.jpg'/>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>lorem wefcwkfwke welkok;lmjffvn sdkwklemd
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
                variant=" m-2" 
                src='https://www.millennialleadership.net/wp-content/uploads/2014/04/small-team-working-together-1024x683.jpg'/>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>lorem wefcwkfwke welkok;lmjffvn sdkwklemd
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img 
                variant=" m-2" 
                src='https://fb.ru/misc/i/gallery/108704/3089231.jpg'/>
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>lorem wefcwkfwke welkok;lmjffvn sdkwklemd
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    )
  }
}
