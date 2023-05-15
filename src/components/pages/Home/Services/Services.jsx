import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-seven-ecru.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center space-y-3'>
                <h3 className='text-3xl text-secondary font-bold'>Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className=" text-stone-500">the majority have suffered alteration in some form, by injected humour,<br/> or randomised words which don't look even slightly believable. . </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;