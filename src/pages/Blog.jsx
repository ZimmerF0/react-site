import React, { Component } from 'react';
import { Col, Container, ListGroup, Row, Card } from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    return (
      <Container >
        <Row>
          <Col className='p-5' md="9">
            <img 
              width={150}
              height={150}
              className="mr-3"
              src='https://repository-images.githubusercontent.com/38163241/54847c80-77ca-11eb-9e03-3d3ffaf5c083'
              alt='js'/>
            <h5 >Blog post</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque minima facere sapiente ullam, provident ducimus suscipit rem neque nulla id temporibus illum mollitia. Suscipit autem minima voluptatum distinctio accusantium excepturi.</p>
          </Col>
          <Col  md="3">
            <h5 className='text-center mt-5'>Categories</h5>
            <Card>
              <ListGroup variant='flush'> 
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Pyton</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3' bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem, beatae unde minus deserunt, labore ea magnam vero voluptate quos consectetur, praesentium ipsum. Nam culpa expedita accusamus repellendus. Dolore, velit.
                  Voluptatum animi excepturi magni?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
