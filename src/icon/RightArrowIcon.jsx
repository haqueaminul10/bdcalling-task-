import React from 'react';

const RightArrowIcon = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
      className='icon'
    >
      <path
        fill={color}
        d='M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z'
      />
    </svg>
  );
};

export default RightArrowIcon;
