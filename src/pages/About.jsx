import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tab-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-2'>
                <Tab.Pane eventKey="first">
                  <img src='https://image.winudf.com/v2/image/Y29tLmF1bGl5YXN0dWRpby5jb25zdHJ1Y3QyX3NjcmVlbnNob3RzXzBfYzNjYzkwY2Q/screen-0.jpg?h=500&fakeurl=1&type=.jpg' />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro qui cupiditate blanditiis error, temporibus officia, in, quod rerum voluptatibus voluptates ea autem ut! Totam sequi consectetur eaque voluptates dicta?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src='https://historyrussia.org/images/DNE_7087a.jpg' />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro qui cupiditate blanditiis error, temporibus officia, in, quod rerum voluptatibus voluptates ea autem ut! Totam sequi consectetur eaque voluptates dicta?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src='https://vncoder.vn/upload/img/news/1587908048.jpg' />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro qui cupiditate blanditiis error, temporibus officia, in, quod rerum voluptatibus voluptates ea autem ut! Totam sequi consectetur eaque voluptates dicta?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src='http://creative24.ru/wp-content/uploads/2019/05/owfJ6sUvQjc-806x403.jpg' />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro qui cupiditate blanditiis error, temporibus officia, in, quod rerum voluptatibus voluptates ea autem ut! Totam sequi consectetur eaque voluptates dicta?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/148969053/original/98f33e505b71a445141e8d4347a83e15fad98a0d/web-front-end-development.jpeg' />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque porro qui cupiditate blanditiis error, temporibus officia, in, quod rerum voluptatibus voluptates ea autem ut! Totam sequi consectetur eaque voluptates dicta?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
