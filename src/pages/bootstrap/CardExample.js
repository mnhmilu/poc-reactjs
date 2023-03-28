import React, { useState, useEffect, Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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

    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.body}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardExample;
