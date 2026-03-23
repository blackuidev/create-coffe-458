import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/dashboard');
    }, [navigate]);

    return (
        <div className="flex h-screen items-center justify-center bg-gray-900">
             <h1 className="text-5xl text-white">Redirecting to dashboard...</h1>
        </div>
    )
}

export default Index;
