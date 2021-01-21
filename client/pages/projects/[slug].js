import { getAllProjectIds, getProjectData } from '../../lib/projects';
import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
	const [ showModal, setShowModal ] = useState(null);

	const openImageModal = e => {
		console.log(e.currentTarget.value);
		const imageId = e.currentTarget.value;
		setShowModal(imageId);
		console.log('show modal', imageId);
	};

	const closeModal = e => {
		console.log(e.target.className);
		if (!(e.target.className == 'modalImage')) {
			setShowModal(null);
		}
	};

	console.log(project);
	return (
		<div className='pageDiv'>
			<Head>
				<title>Joey Desjardin Portfolio | {project.title}</title>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
					integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
					crossOrigin='anonymous'
				/>
			</Head>

			<nav className='navBar'>
				<div className='navbarContentContainer'>
					<h1 className='navTitle'>JWD2</h1>
					<ul className='navLinks'>
						<li key='home'>
							<Link href='/#'>Home</Link>
						</li>
						<li key='projects'>
							<Link href='/#featured-projects'>Projects</Link>
						</li>
						<li key='resume'>
							<Link href='/Resume.pdf'>Resume</Link>
						</li>
						<li key='contact'>
							<Link href='/#contact-links'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>

			<header>
				<div className='headerContainer'>
					<div className='headerContentContainer'>
						<div className='title'>
							<h1>{project.title}</h1>
							<div className='techMiniIcons'>
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
						project.images.map((image, index) => (
							<button
								key={image.asset._id}
								value={index}
								onClick={openImageModal}
								className='imagebutton'
							>
								<img src={image.asset.url} height='202.5px' width='360px' />
							</button>
						))}
				</div>
			</div>

			{showModal && (
				<div id='imageModal' className='imageModalContainer' onClick={closeModal}>
					<div className='modalContent'>
						<img
							className='modalImage'
							src={project.images[showModal].asset.url}
							alt=''
						/>
						<div className='modalCloseButton' onClick={closeModal}>
							<i className='fas fa-window-close fa-2x' />
						</div>
					</div>
				</div>
			)}

			<div className='projectContainer'>
				<div className='projectDescriptionContainer'>
					<div className='projectSectionContainer'>
						<div className='titleDiv'>
							<h2>{project.title1}</h2>
							<div className='tech_icons'>
								{project.sectionIcons1 &&
									project.sectionIcons1.map(item => {
										if (item.mainIcon) {
											return (
												<img
													key={item.mainIcon.asset._id}
													src={item.mainIcon.asset.url}
												/>
											);
										}
									})}
							</div>
						</div>

						<div className='textContentDiv'>
							{project.body1 &&
								project.body1.length > 0 &&
								project.body1.map(node => (
									<p key={node._key}>
										{node.children.length > 0 &&
											node.children.map(text => (
												<span key={text._key}>
													{text.marks.length > 0 ? (
														<a
															href={
																node.markDefs.filter(
																	markDef =>
																		markDef._key ===
																		text.marks[0]
																)[0].href
															}
															target='_blank'
														>
															{text.text}
														</a>
													) : (
														<Fragment>{text.text}</Fragment>
													)}
												</span>
											))}
									</p>
								))}
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
												return (
													<img
														src={item.mainIcon.asset.url}
														key={item.mainIcon.asset._id}
													/>
												);
											}
										})}
								</div>
							</div>

							<div className='textContentDiv'>
								{project.body2 &&
									project.body2.length > 0 &&
									project.body2.map(node => (
										<p key={node._key}>
											{node.children.length > 0 &&
												node.children.map(text => (
													<span key={text._key}>
														{text.marks.length > 0 ? (
															<a
																href={
																	node.markDefs.filter(
																		markDef =>
																			markDef._key ===
																			text.marks[0]
																	)[0].href
																}
																target='_blank'
															>
																{text.text}
															</a>
														) : (
															<Fragment>{text.text}</Fragment>
														)}
													</span>
												))}
										</p>
									))}
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
												return (
													<img
														src={item.mainIcon.asset.url}
														key={item.mainIcon.asset._id}
													/>
												);
											}
										})}
								</div>
							</div>

							<div className='textContentDiv'>
								{project.body3 &&
									project.body3.length > 0 &&
									project.body3.map(node => (
										<p key={node._key}>
											{node.children.length > 0 &&
												node.children.map(text => (
													<span key={text._key}>
														{text.marks && text.marks.length > 0 ? (
															<a
																href={
																	node.markDefs.filter(
																		markDef =>
																			markDef._key ===
																			text.marks[0]
																	)[0].href
																}
																target='_blank'
															>
																{text.text}
															</a>
														) : (
															<Fragment>{text.text}</Fragment>
														)}
													</span>
												))}
										</p>
									))}
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
												return (
													<img
														src={item.mainIcon.asset.url}
														key={item.mainIcon.asset._id}
													/>
												);
											}
										})}
								</div>
							</div>

							<div className='textContentDiv'>
								{project.body4 &&
									project.body4.length > 0 &&
									project.body4.map(node => (
										<p key={node._key}>
											{node.children.length > 0 &&
												node.children.map(text => (
													<span key={text._key}>
														{text.marks.length > 0 ? (
															<a
																href={
																	node.markDefs.filter(
																		markDef =>
																			markDef._key ===
																			text.marks[0]
																	)[0].href
																}
																target='_blank'
															>
																{text.text}
															</a>
														) : (
															<Fragment>{text.text}</Fragment>
														)}
													</span>
												))}
										</p>
									))}
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
