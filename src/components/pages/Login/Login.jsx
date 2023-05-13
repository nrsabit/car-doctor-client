import React, { useContext } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import img from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const handleLogIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 
        form.reset()

        logIn(email, password)
        .then(res => console.log('from login', res.user))
        .catch(error => console.log(error))
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="w-full">
                        <img src={img} alt="" />
                    </div>
                    <div className="card shadow-2xl w-full bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center text-secondary">Login</h1>
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-secondary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='my-5 text-center'>New on Car Doctors? <Link to="/signup" className='text-secondary font-bold'>SignUp Now</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;