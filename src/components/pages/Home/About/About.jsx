import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mb-8 py-20">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='md:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-10 border-8 border-white" />
                </div>
                <div className='md:w-1/2 space-y-5'>
                    <h3 className='text-3xl text-secondary font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className=" text-stone-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=" text-stone-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;