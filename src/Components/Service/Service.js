import React from 'react';
import { useEffect } from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const Service = (props) => {
    const { name, fees, instructor, email, cell, serviceImg } = props.service;

    return (
        <Col >
            <Card >
                <Card.Img variant="top" src={serviceImg} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>


                        <br />
                        <Button variant="success" > Details</Button>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;