import React from 'react';

const Input = ({ type, placeholder, className, ...rest }) => {
  const classes = `placeholder-gray dark:placeholder-neutral-400 dark:bg-neutral-700 ${className}`;

  return (
    <input
      type={type || 'text'}
      placeholder={placeholder || ''}
      className={classes}
      {...rest}
    />
  );
};

export default Input;
