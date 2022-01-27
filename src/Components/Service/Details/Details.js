import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Details = () => {
    const [details, setDetails] = useState;
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])


    return (
        <div>
            <h6>hi {details.length}</h6>
        </div>
    );
};

export default Details;