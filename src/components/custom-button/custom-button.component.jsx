import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...props }) => {
	// return <input className='custom-button' {...props} />;
	return (
		<button className='custom-button' {...props}>
			{children}
		</button>
	);
};

export default CustomButton;
