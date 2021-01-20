import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
	console.log(project);
	return (
		<Link href={`/projects/${project.slug.current}`} key={project.slug.current}>
			<div className='projectCard flexColumn'>
				<img src={project.images[0].asset.url} alt='' />
				<h3>{project.title}</h3>
				<p className='textAlign'>{project.oneLiner}</p>
				<ul className='tags flexAlign flexWrap'>
					{project.categoryNames.length > 0 &&
						project.categoryNames.map((category, index) => (
							<li key={index}>{category.title}</li>
						))}
				</ul>
			</div>
		</Link>
	);
};

export default ProjectCard;
