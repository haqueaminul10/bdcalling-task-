import { useState } from 'react';
import Register from './Register';
import Login from './login';
import { Button } from '../ui/button';

const SignIn = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className='relative group'>
      <div
        className='flex items-center gap-1 cursor-pointer '
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
              <Login />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignIn;
