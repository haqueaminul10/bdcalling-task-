import React from 'react';

const PhoneIcon = ({ size = 24, color = '#000000' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
    >
      <path
        fill={color}
        d='M20 16v4c-2.758 0-5.07-.495-7-1.325-3.841-1.652-6.176-4.63-7.5-7.675C4.4 8.472 4 5.898 4 4h4l1 4-3.5 3c1.324 3.045 3.659 6.023 7.5 7.675L16 15l4 1z'
      />
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M13 18.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1-3 3.675zm0 0C9.159 17.023 6.824 14.045 5.5 11m0 0C4.4 8.472 4 5.898 4 4h4l1 4-3.5 3z'
      />
    </svg>
  );
};

export default PhoneIcon;
