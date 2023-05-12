import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData()
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext)
    const handleCheckout = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const newService = {
            name, date, email, price, service:title, service_id: _id, img
        }
        form.reset()
        fetch('http://localhost:5000/checkout', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Service Booked Successfully')
            }
        })
    }
    return (
        <div>
            <h2 className='text-4xl text-secondary text-bold text-center my-8'>Check Out: {title}</h2>
            <div className="card-body bg-base-200 mb-24 rounded">
                <form onSubmit={handleCheckout}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Booking Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" defaultValue={user?.email} name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-2xl">Due Amount</span>
                            </label>
                            <input type="text" name='price' placeholder="Due Amount" defaultValue={'$'+price} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-12">
                        <button className="btn btn-secondary btn-block">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;