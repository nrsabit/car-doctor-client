import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div className='mb-8'>
            <h2 className='text-5xl font-bold text-center text-secondary my-8'>Total Booked Services: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => <BookingRow key={booking._id} booking={booking}></BookingRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;