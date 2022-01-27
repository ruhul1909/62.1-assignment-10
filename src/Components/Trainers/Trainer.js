import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Trainer = ({ trainer }) => {
    const { instructor, email, cell, img } = trainer;

    return (
        <Col >

            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{instructor}</Card.Title>
                    <Card.Text>
                        <Link to="/details" > Profile</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Trainer;