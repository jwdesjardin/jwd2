import React from 'react';

const ProjectCard = ({ project }) => {
	return (
		<div className='projectCard flexColumn'>
			<img src={project.mainImage.asset.url} alt='' />
			<h3>{project.title}</h3>
			<p className='textAlign'>{project.body[0].children[0].text}</p>
			<ul className='tags flexAlign flexWrap'>
				{project.categoryNames.length > 0 &&
					project.categoryNames.map((category, index) => (
						<li key={index}>{category.title}</li>
					))}
			</ul>
		</div>
	);
};

export default ProjectCard;
