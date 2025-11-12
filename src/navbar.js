import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav>
      <div>Мое приложение</div>
      
      {isAuthenticated ? (
        <div>
          <span>Привет, {user?.name}</span>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      ) : (
        <div>
          <a href="/login">Войти</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;