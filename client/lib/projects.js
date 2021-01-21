import sanityClient from '../client.js';

//returns array of featured project objects
export async function getFeaturedProjectsData() {
	try {
		const featuredProjects = await sanityClient.fetch(
			`*[_type == "project" && featured == true ]{
      title,
      slug,
      oneLiner,
      "categoryNames": categories[]->{title},
      images[]{
				asset->{
					_id, url
				},
				alt
			}
    }`
		);
		return featuredProjects;
	} catch (error) {
		console.log(error);
	}
}

//returns array of treehouse project objects
export async function getTreehouseProjectsData() {
	try {
		const treehouseProjects = await sanityClient.fetch(
			`*[_type == "project" && treehouse == true ]{
				title,
				slug,
				body,
				"categoryNames": categories[]->{title},
				images[]{
					asset->{
						_id, url
					},
					alt
				}
			}`
		);
		return treehouseProjects;
	} catch (error) {
		console.log(error);
	}
}

// returns array of slugs for all projects
export async function getAllProjectIds() {
	try {
		const projectIds = await sanityClient.fetch(`*[_type == "project" ]{slug}`);

		return projectIds.map(project => {
			console.log(project);
			return {
				params: {
					slug: project.slug.current
				}
			};
		});
	} catch (error) {
		console.log(error);
	}
}

// returns an project object for the given slug
export async function getProjectData(slug) {
	try {
		const project = await sanityClient.fetch(
			`*[_type == "project" && slug.current == "albumlists"][0]{
				title,
							oneLiner,
							githubLink,
							liveLink, 
							slug,
							categories[]->{ 
								mainIcon{
									asset->{
										_id, url
									}, 
									alt
								}
							},
							author->{name},
							images[]{
								asset->{
									_id, url
								},
								alt
							},
							title1,
							sectionIcons1[]->{
								mainIcon{
									asset->{
										_id, url
									}, 
									alt
								}
							},
							body1[]{
								_key,
								children[]{
									_key,
									marks[],
									text
								},
								markDefs[]{
									_key,
									href
								}
			},
							title2,
							sectionIcons2[]->{
								mainIcon{
									asset->{
										_id, url
									}, 
									alt
								}
							},
							body2[]{
								_key,
								children[]{
									_key,
									marks[],
									text
								},
								markDefs[]{
									_key,
									href
								}
			},
							title3,
							sectionIcons3[]->{
								mainIcon{
									asset->{
										_id, url
									}, 
									alt
								}
							},
							body3[]{
								_key,
								children[]{
									_key,
									marks[],
									text
								},
								markDefs[]{
									_key,
									href
								}
			},
							title4,
							sectionIcons4[]->{
								mainIcon{
									asset->{
										_id, url
									}, 
									alt
								}
							},
							body4[]{
								_key,
								children[]{
									_key,
									marks[],
									text
								},
								markDefs[]{
									_key,
									href
								}
			}
							
			}
		`
		);
		return project;
	} catch (error) {
		console.log(error);
	}
}
// // returns array of slugs for all projects
// export async function getAllProjectIds() {
// 	try {
// 		const projectIds = await sanityClient.fetch(`*[_type == "project" ]{slug}`);

// 		return projectIds.map(project => {
// 			console.log(project);
// 			return {
// 				params: {
// 					slug: project.slug.current
// 				}
// 			};
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// // returns an project object for the given slug
// export async function getProjectData(slug) {
// 	try {
// 		const project = await sanityClient.fetch(
// 			`*[_type == "project" && slug.current == "${slug}"][0]{
// 				title,
// 				oneLiner,
// 				githubLink,
// 				liveLink,
// 				slug,
// 				categories[]->{
//           mainIcon{
// 						asset->{
// 							_id, url
// 						},
// 						alt
// 					}
// 				},
// 				author->{name},
// 				images[]{
// 					asset->{
// 						_id, url
// 					},
// 					alt
// 				},
// 				title1,
// 				sectionIcons1[]->{
// 					mainIcon{
// 						asset->{
// 							_id, url
// 						},
// 						alt
// 					}
// 				},
// 				body1[]{
// 					children[]{
// 						text
// 					}
// 				},
// 				title2,
// 				sectionIcons2[]->{
// 					mainIcon{
// 						asset->{
// 							_id, url
// 						},
// 						alt
// 					}
// 				},
// 				body2[]{
// 					children[]{
// 						text
// 					}
// 				},
// 				title3,
// 				sectionIcons3[]->{
// 					mainIcon{
// 						asset->{
// 							_id, url
// 						},
// 						alt
// 					}
// 				},
// 				body3[]{
// 					children[]{
// 						text
// 					}
// 				},
// 				title4,
// 				sectionIcons4[]->{
// 					mainIcon{
// 						asset->{
// 							_id, url
// 						},
// 						alt
// 					}
// 				},
// 				body4[]{
// 					children[]{
// 						text
// 					}
// 				}
// 			}
// 		`
// 		);
// 		return project;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
