import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...otherData }) => {
	return (
		<div className='group'>
			{label ? (
				<label
					className={`${
						otherData.value.length ? 'shrink' : ''
					} form-input-label`}>
					{label}
				</label>
			) : null}

			<input onChange={handleChange} className='form-input' {...otherData} />
		</div>
	);
};

export default FormInput;
