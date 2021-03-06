import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="container" style={{ margin: '50px' }}>
            <h1 className="mt-10" style={{ color: 'tomato', backgroundColor: 'gray' }}>Our Services</h1>
            <Row xs={1} md={3} className="g-4">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>

        </div>
    );
};

export default Services;