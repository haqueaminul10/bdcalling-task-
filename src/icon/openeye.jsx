import React from 'react';

const OpenEyeIcon = ({ color, size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 64 64'
    >
      <path
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeMiterlimit='10'
        d='M1,32c0,0,11,15,31,15s31-15,31-15S52,17,32,17S1,32,1,32z'
      />
      <circle
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeMiterlimit='10'
        cx='32'
        cy='32'
        r='7'
      />
    </svg>
  );
};

export default OpenEyeIcon;
