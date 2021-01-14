import Head from 'next/head';
import sanityClient from '../client.js';
import { useState, useEffect } from 'react';

export default function Home() {
	const [ projects, setProjects ] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
      title,
      slug,
      mainImage{
        asset->{
          _id, url
        },
        alt
      }
    }`
			)
			.then(data => setProjects([ ...data ]))
			.catch(console.error);
	}, []);

	console.log(projects);

	return (
		<div className='container'>
			<Head>
				<title> Joey Desjardin Portfolio | Home </title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>Helloo World</h1>
				<ul>
					{projects.length > 0 &&
						projects.map(project => (
							<li key={project.slug.current}>{project.title}</li>
						))}
				</ul>
			</main>

			<footer />
		</div>
	);
}
