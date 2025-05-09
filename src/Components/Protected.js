import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('login');
    if (!login) {
      navigate('/login');
    }
  }, [navigate]); // Added dependency to prevent infinite rerender

  return <Component />;
};

export default Protected;
