import Head from 'next/head';
import sanityClient from '../client.js';
import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import TreehouseProjectCard from '../components/TreehouseProjectCard';
import TreehouseProjectsHeader from '../components/TreehouseProjectsHeader';

export default function Home() {
	const [ featuredProjects, setFeaturedProjects ] = useState([]);
	const [ treehouseProjects, setTreehouseProjects ] = useState([]);
	const [ userInfo, setUserInfo ] = useState({});

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project" && featured == true]{
      title,
      slug,
      body,
      "categoryNames": categories[]->{title},
      mainImage{
        asset->{
          _id, url
        },
        alt
      }
    }`
			)
			.then(data => setFeaturedProjects([ ...data ]))
			.catch(console.error);
		sanityClient
			.fetch(
				`*[_type == "project" && treehouse == true]{
      title,
      slug,
      body,
      "categoryNames": categories[]->{title},
      mainImage{
        asset->{
          _id, url
        },
        alt
      }
    }`
			)
			.then(data => setTreehouseProjects([ ...data ]))
			.catch(console.error);
		sanityClient
			.fetch(`*[_type == "author"][0]`)
			.then(data => setUserInfo(data))
			.catch(console.error);
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
					crossorigin='anonymous'
				/>
			</Head>

			{/* navbar section  */}

			<main>
				{/* landing section  */}
				<section className='landingContainer'>
					<div className='contentContainer'>
						<p>
							<span>Hello, Welcome to my site</span>
						</p>
						<h1 className='landingHeaderText'>
							My Name is <span className='textShadow'>Joey Desjardin</span> and I am a{' '}
							<span className='textShadow'>Web Developer.</span>{' '}
						</h1>
						<p>
							I am a fully addicted lifelong learner. This page showcases the projects
							I have developed in the process of becoming a better developer. I am
							interested in learning new technologies and meeting new people along the
							way{' '}
						</p>
						<button className='btn btn-primary'>Email Me</button>
					</div>
				</section>

				{/* projects section */}
				<section className='featuredProjectsContainer'>
					<div className='contentContainer'>
						<h2 className='sectionHeaderText'>Projects</h2>
						<div className='flex flexWrap flexAlign flexCenter'>
							{/* display all project cards from projects state */}
							{featuredProjects.length > 0 &&
								featuredProjects.map(project => (
									<ProjectCard key={project.slug.current} project={project} />
								))}
						</div>
					</div>
				</section>

				{/* about me section */}
				<section className='aboutMeContainer'>
					<div className='contentContainer flexAlign split'>
						<div className=''>
							<h2>About Me</h2>
							{userInfo.bio &&
								userInfo.bio.length > 0 &&
								userInfo.bio.map(node => (
									<p key={node._id}>
										{node.children.length > 0 &&
											node.children.map(text => (
												<span key={text._id}>
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
														<span key={text._id}>{text.text}</span>
													)}
												</span>
											))}
									</p>
								))}
						</div>
						<div className='imgDiv'>
							<img src='/images/profile-pic.jpg' alt='' />
						</div>
					</div>
				</section>

				{/* treehouse section */}

				<section className='treehouseContainer'>
					<div className='contentContainer'>
						<TreehouseProjectsHeader />

						<h3>Treehouse Projects</h3>
						<div className='treehouseProjectsContainer'>
							<div className='flex flexWrap'>
								{treehouseProjects.length > 0 &&
									treehouseProjects.map(project => (
										<TreehouseProjectCard
											key={project.slug.current}
											project={project}
										/>
									))}
							</div>
						</div>
					</div>
				</section>

				{/* contact links section */}
				<section className='contactMeContainer'>
					<div className='contentContainer flexCenter flexColumn'>
						<h2>Get In Touch</h2>

						<div className='contactLinks flexAlign'>
							<a href='mailto:jwdesjardin@gmail.com'>
								<i class='fas fa-envelope fa-3x' />
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
				<div className='contentContainer flexAlign'>
					<p>Developed by Joey Desjardin</p>
					<p>2020</p>
				</div>
			</footer>
		</div>
	);
}
