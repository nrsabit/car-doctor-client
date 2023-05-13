import React from 'react';

const BookingRow = ({ booking }) => {
    const {service, img, price, date } = booking
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
                <button className="btn btn-outline btn-secondary btn-sm">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;