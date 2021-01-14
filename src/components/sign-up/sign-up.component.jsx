import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

class SignUp extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = ({ target: { value, name } }) => {
		this.setState({ [name]: value });
	};

	render() {
		const { name, email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						type='name'
						value={name}
						name='name'
						label='Name'
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						type='email'
						value={email}
						name='email'
						label='Email'
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						type='password'
						value={password}
						name='password'
						label='Password'
						required
					/>

					<FormInput
						handleChange={this.handleChange}
						type='password'
						value={password}
						name='confirmPassword'
						label='Confirm Password'
						required
					/>

					<CustomButton type='submit' value='Sign Up' />
				</form>
			</div>
		);
	}
}

export default SignUp;
