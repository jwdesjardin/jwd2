import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Head from 'next/head';

//sets props in Post Component - gets params from fileName
export async function getStaticProps({ params }) {
	const project = await getProjectData(params.slug);
	return {
		props: {
			project
		}
	};
}

//creates paths
export async function getStaticPaths() {
	const paths = await getAllProjectIds();
	console.log(paths);
	return {
		paths,
		fallback: false
	};
}

export default function Post({ project }) {
	console.log(project);
	return (
		<div>
			<Head>
				<title>Joey Desjardin Portfolio | {project.title}</title>
				<link rel='stylesheet' href='/projects.css' />
			</Head>

			<header>
				<div className='headerContainer'>
					<div className='headerContentContainer'>
						<div className='leftFlexItem'>
							<h1>{project.title}</h1>
							<div className='tech_mini-icons'>
								{project.categories.length > 0 &&
									project.categories.map(category => {
										if (category.mainIcon) {
											return (
												<img
													key={category.mainIcon.asset._id}
													src={category.mainIcon.asset.url}
												/>
											);
										}
									})}
							</div>
						</div>
						<div className='projectLinks'>
							<a href={project.githubLink} target='_blank'>
								<button className='btn btn-primary'>Github Page</button>
							</a>
							<a href={project.liveLink} target='_blank'>
								<button className='btn btn-secondary'>Live Project</button>
							</a>
						</div>
					</div>
				</div>
			</header>
			<div className='imgGalleryContainer'>
				<div className='imgsContainer'>
					{project.images.length > 0 &&
						project.images.map(image => (
							<img
								key={image.asset._id}
								src={image.asset.url}
								height='202.5px'
								width='360px'
							/>
						))}
				</div>
			</div>

			<div className='projectContainer'>
				<div className='projectDescriptionContainer'>
					<div className='projectSectionContainer'>
						<div className='titleDiv'>
							<h2>{project.title1}</h2>
							<div className='tech_icons'>
								{project.sectionIcons1 &&
									project.sectionIcons1.map(item => {
										if (item.mainIcon) {
											return <img src={item.mainIcon.asset.url} />;
										}
									})}
							</div>
						</div>

						<div className='textContentDiv'>
							{project.body1 &&
								project.body1.map(body => <p>{body.children[0].text}</p>)}
						</div>
					</div>

					{project.title2 && (
						<div className='projectSectionContainer'>
							<div className='titleDiv'>
								<h2>{project.title2}</h2>
								<div className='tech_icons'>
									{project.sectionIcons2 &&
										project.sectionIcons2.map(item => {
											if (item.mainIcon) {
												return <img src={item.mainIcon.asset.url} />;
											}
										})}
								</div>
							</div>

							<div className='textContentDiv'>
								{project.body2 &&
									project.body2.map(body => <p>{body.children[0].text}</p>)}
							</div>
						</div>
					)}

					{project.title3 && (
						<div className='projectSectionContainer'>
							<div className='titleDiv'>
								<h2>{project.title3}</h2>
								<div className='tech_icons'>
									{project.sectionIcons3 &&
										project.sectionIcons3.map(item => {
											if (item.mainIcon) {
												return <img src={item.mainIcon.asset.url} />;
											}
										})}
								</div>
							</div>

							<div className='textContentDiv'>
								{project.body3 &&
									project.body3.map(body => <p>{body.children[0].text}</p>)}
							</div>
						</div>
					)}

					{project.title4 && (
						<div className='projectSectionContainer'>
							<div className='titleDiv'>
								<h2>{project.title4}</h2>
								<div className='tech_icons'>
									{project.sectionIcons4 &&
										project.sectionIcons4.map(item => {
											if (item.mainIcon) {
												return <img src={item.mainIcon.asset.url} />;
											}
										})}
								</div>
							</div>

							<div className='textContentDiv'>
								{project.body4 &&
									project.body4.map(body => <p>{body.children[0].text}</p>)}
							</div>
						</div>
					)}
				</div>
			</div>

			<footer className='footerContainer'>
				<div className='footerTextDiv'>
					<a href='https://icons8.com/icon/QBqFNfPPB2Kx/sass'>Sass icon by Icons8</a>
				</div>
			</footer>
		</div>
	);
}
