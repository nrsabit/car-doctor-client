import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className='text-secondary font-bold text-start'>Price: {price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-outline btn-secondary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;