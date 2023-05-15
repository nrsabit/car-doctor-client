import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const url = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => navigate(url, {replace: true}))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;