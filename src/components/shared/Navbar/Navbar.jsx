import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar rounded mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/blogs">Blogs</Link> </li>
                        {user ? <>
                            <li> <Link to="/bookings">Booked Services</Link> </li>
                            <li> <button onClick={handleSignOut}>Log Out</button> </li>
                        </> :
                            <li> <Link to="/login">Login</Link> </li>}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/blogs">Blogs</Link> </li>
                    {user ? <>
                        <li> <Link to="/bookings">Booked Services</Link> </li>
                        <li> <button onClick={handleSignOut}>Log Out</button> </li>
                    </> :
                        <li> <Link to="/login">Login</Link> </li>}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-secondary">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;