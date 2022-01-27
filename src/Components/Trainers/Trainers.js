import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import trainer1 from '../../images/trainers/1.jpg'
import trainer2 from '../../images/trainers/2.jpg'
import trainer3 from '../../images/trainers/3.jpg'
import trainer4 from '../../images/trainers/4.jpg'
import trainer5 from '../../images/trainers/5.jpg'
import trainer6 from '../../images/trainers/6.jpg'
import trainer7 from '../../images/trainers/7.jpg'
import trainer8 from '../../images/trainers/8.jpg'
import trainer9 from '../../images/trainers/9.jpg'
import Trainer from './Trainer';

const trainers = [
    {
        instructor: "Elin",
        email: "elin@gmail.com",
        cell: 15208391,
        img: trainer1
    },

    {

        instructor: "Hannes",
        email: "elin@gmail.com",
        cell: 15208392,
        img: trainer2
    },
    {

        instructor: "Paul",
        email: "elin@gmail.com",
        cell: 15208393,
        img: trainer3
    },
    {

        instructor: "Sunan",
        email: "elin@gmail.com",
        cell: 15208394,
        img: trainer4
    },
    {

        instructor: "Arif",
        email: "elin@gmail.com",
        cell: 15208395,
        img: trainer5
    },
    {

        instructor: "Azizul Haque",
        email: "elin@gmail.com",
        cell: 15208396,
        img: trainer6
    },
    {

        instructor: "Ruhul",
        email: "elin@gmail.com",
        cell: 15208397,
        img: trainer7
    },
    {

        instructor: "Maziar",
        email: "mazir@gmail.com",
        cell: 15208398,
        img: trainer8
    },
    {

        instructor: "Jennah",
        email: "elin@gmail.com",
        cell: 15208399,
        img: trainer9
    }
]

const Trainers = () => {
    return (
        <div className="container" style={{ margin: '50px' }}>
            <h1 className="mt-10" style={{ color: 'tomato', backgroundColor: 'gray' }}>Our Trainers</h1>

            <Row xs={1} md={3} className="g-4">
                {
                    trainers.map(trainer => <Trainer
                        key={trainer.instructor}
                        trainer={trainer}
                    ></Trainer>)
                }
            </Row>

        </div>
    );
};

export default Trainers;