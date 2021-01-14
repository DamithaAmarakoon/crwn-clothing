import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = ({ target: { value, name } }) => {
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
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

					<CustomButton type='submit' value='Submit'>
						Sign In
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
