import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Register from './Register';
import Login from './login';
import { Button } from '../ui/button';
import PersonIcon from '@/icon/person';

const SignIn = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLoginSuccess = () => {
    localStorage.setItem('authToken', 'dummyToken');
    setIsLoggedIn(true);
    setIsDropdownOpen(false);
    router.push('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <div className='relative'>
      {!isLoggedIn ? (
        <>
          <div
            className='flex items-center gap-1 cursor-pointer'
            onClick={toggleDropdown}
          >
            <p className='leading-none p-2'>
              <Button>Sign In</Button>
            </p>
          </div>
          {isDropdownOpen && (
            <div className='absolute bg-white shadow-lg rounded-md p-2'>
              <ul className='text-black cursor-pointer'>
                <li>
                  <Register />
                </li>
                <li>
                  <Login onLoginSuccess={handleLoginSuccess} />
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className='flex items-center gap-1'>
          <PersonIcon color='black' size={18} />
          <p className='cursor-pointer' onClick={handleLogout}>
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
