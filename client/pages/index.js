import Head from 'next/head';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import TreehouseProjectCard from '../components/TreehouseProjectCard';
import TreehouseProjectsHeader from '../components/TreehouseProjectsHeader';
import { getFeaturedProjectsData, getTreehouseProjectsData } from '../lib/projects';
import { getUserData } from '../lib/authors';
import Link from 'next/link';

export default function Home() {
	const [ featuredProjects, setFeaturedProjects ] = useState([]);
	const [ treehouseProjects, setTreehouseProjects ] = useState([]);
	const [ userInfo, setUserInfo ] = useState({});

	useEffect(() => {
		const getPageData = async () => {
			setFeaturedProjects(await getFeaturedProjectsData());
			setTreehouseProjects(await getTreehouseProjectsData());
			setUserInfo(await getUserData());
		};

		getPageData();
	}, []);

	console.log('featured projects', featuredProjects);
	console.log('treehouse projects', treehouseProjects);
	console.log('userInfo', userInfo.bio);

	return (
		<div className='container'>
			<Head>
				<title> Joey Desjardin Portfolio | Home </title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
					integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
					crossOrigin='anonymous'
				/>
			</Head>

			<nav className='navBar'>
				<div className='navbarContentContainer'>
					<h1 className='navTitle'>
						<Link href='/'>JWD2</Link>
					</h1>
					<ul className='navLinks'>
						<li>
							<Link href='/#'>Home</Link>
						</li>
						<li>
							<Link href='/#featured-projects'>Projects</Link>
						</li>
						<li>
							<Link href='/Resume.pdf'>Resume</Link>
						</li>
						<li>
							<Link href='/#contact-links'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>

			{/* navbar section  */}

			<main>
				{/* landing section  */}
				<section className='landingContainer'>
					<div className='contentContainer'>
						<div className='headerTextContent'>
							<h1 className='landingHeaderText'>
								My Name is Joey Desjardin. <br />I am a Software Developer.{' '}
							</h1>
							<p>
								I am a curious developer eager to pick up new skills. I am looking
								for team to contribute to and learn with.
							</p>
							<a href='mailto:jwdesjardin@gmail.com'>
								<button className='btn btn-primary'>Email Me</button>
							</a>
						</div>
					</div>
				</section>

				{/* projects section */}
				<section id='featured-projects' className='featuredProjectsContainer'>
					<div className='contentContainer'>
						<h2 className='sectionHeaderText'>Featured Projects</h2>
						<div className='projectsContainer'>
							{/* display all project cards from projects state */}
							{featuredProjects.length > 0 &&
								featuredProjects.map(project => (
									<ProjectCard project={project} key={project.slug.current} />
								))}
						</div>
					</div>
				</section>

				{/* about me section */}
				<section className='aboutMeContainer'>
					<div className='contentContainer flexAlign split'>
						<div className='flexColumn'>
							<h2 className='sectionHeaderText'>About Me</h2>
							<div className='aboutMeText'>
								{userInfo.bio &&
									userInfo.bio.length > 0 &&
									userInfo.bio.map(node => (
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
					</div>
				</section>

				{/* treehouse section */}

				<section className='treehouseContainer'>
					<div className='contentContainer'>
						<h2 className='sectionHeaderText'> Treehouse Projects</h2>

						<div className='treehouseProjectsContainer'>
							{treehouseProjects.length > 0 &&
								treehouseProjects.map(project => (
									<TreehouseProjectCard
										key={project.slug.current}
										project={project}
									/>
								))}
						</div>
					</div>
					<TreehouseProjectsHeader />
				</section>

				{/* contact links section */}
				<section id='contact-links' className='contactMeContainer'>
					<div className='contentContainer flexCenter flexColumn'>
						<h2>Get In Touch</h2>

						<div className='contactLinks flexAlign'>
							<a href='mailto:jwdesjardin@gmail.com'>
								<i className='fas fa-envelope fa-3x' />
							</a>
							<a href='https://github.com/jwdesjardin'>
								<i className='fab fa-github fa-3x' />
							</a>
							<a href='www.linkedin.com/in/joseph-desjardin-b34441137'>
								<i className='fab fa-linkedin fa-3x' />
							</a>
						</div>
					</div>
				</section>
			</main>

			{/* footer section */}
			<footer className='footerContainer'>
				<div className='contentContainer flexAlign flexColumn'>
					<p>Developed by Joey Desjardin</p>
					<p>2020</p>
				</div>
			</footer>
		</div>
	);
}
