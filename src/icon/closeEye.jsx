import React from 'react';

const CloseEyeIcon = ({ color = '#000000', size = 64 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 64 64'
    >
      <path
        d='M1,32c0,0,11,15,31,15s31-15,31-15S52,17,32,17S1,32,1,32z'
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
      <circle
        cx='32'
        cy='32'
        r='7'
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
      <line
        x1='9'
        y1='55'
        x2='55'
        y2='9'
        fill='none'
        stroke={color}
        strokeWidth='2'
        strokeMiterlimit='10'
      />
    </svg>
  );
};

export default CloseEyeIcon;
