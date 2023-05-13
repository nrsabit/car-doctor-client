import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const {_id, service, img, price, date } = booking
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-sm btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={img} />
                    </div>
                </div>

            </td>
            <td>
                {service}
            </td>
            <td className='text-secondary'>{price}</td>
            <td>{date}</td>
            <th>
                <button onClick={()=> handleConfirm(_id)} className="btn btn-outline btn-secondary btn-sm">Confirm Booking</button>
            </th>
        </tr>
    );
};

export default BookingRow;