import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				<Link to='/contact' className='option'>
					CONTACT
				</Link>
				{!currentUser ? (
					<Link to='/signin' className='option'>
						SIGN IN
					</Link>
				) : (
					<div onClick={() => auth.signOut()} className='option'>
						SIGN OUT
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
