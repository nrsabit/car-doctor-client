import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const url = `https://car-doctor-server-seven-ecru.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctors-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    alert(data.message)
                    navigate('/')
                }else{
                    setBookings(data)
                }
            })
    }, [])

    const handleDelete = id => {
        const proceed = confirm("Are you Sure?")
        if(proceed){
            fetch(`https://car-doctor-server-seven-ecru.vercel.app/bookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert("Deleted Successfully")
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleConfirm = id => {
        const proceed = confirm("Do you want to Confirm it?")
        if(proceed){
            fetch(`https://car-doctor-server-seven-ecru.vercel.app/bookings/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({status: "confirmed"})
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    alert('Booking Confirmed')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updatedBookedService = bookings.find(booking => booking._id === id)
                    updatedBookedService.status = "confirmed"
                    const newBookings = [updatedBookedService, ...remaining]
                    setBookings(newBookings)
                }
            })
        }
    }

    return (
        <div className='mb-8'>
            <h2 className='text-5xl font-bold text-center text-secondary my-8'>Total Booked Services: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;