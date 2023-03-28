import React, { useState, useEffect, Component } from 'react';
import { Card, Row, Col, Container, Button } from "react-bootstrap";

import Holder from 'react-holder';

function CardExample() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <Row>
        {data.map(item => (          
          <Col key={item.id} xs={12} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
            <Card.Img src="https://via.placeholder.com/150x75" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
        ))}
      </Row>
    </Container>

  );
}

export default CardExample;
