import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS_DATA from './directory.data';
import './directory.styles.scss';

class Directory extends Component {
	state = {
		sections: SECTIONS_DATA
	};

	render() {
		const { sections } = this.state;

		return (
			<div className='directory-menu'>
				{sections.map(section => (
					<MenuItem key={section.id} {...section} />
				))}
			</div>
		);
	}
}

export default Directory;
