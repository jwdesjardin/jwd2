import React from 'react';

const TreehouseProjectsHeader = () => {
	return (
		<div className='certificateContainer '>
			<a
				href='https://www.credential.net/5efb73a1-9b1b-4755-8bf7-3b96a29b29e5'
				target='_blank'
			>
				<img
					src='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/27080447'
					alt=''
				/>
			</a>

			<div className='flexColumn flexAlign'>
				<img src='/images/treehouseSquare.png' alt='' />
				<a href='https://teamtreehouse.com/joeydesjardin' target='_blank'>
					<button className='btn btn-primary'>View Profile</button>
				</a>
			</div>
		</div>
	);
};

export default TreehouseProjectsHeader;
