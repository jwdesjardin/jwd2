import sanityClient from '../client.js';

// returns an user object for the sole user
export async function getUserData() {
	try {
		const author = await sanityClient.fetch(`*[_type == "author"][0]`);
		return author;
	} catch (error) {
		console.log(error);
	}
}
