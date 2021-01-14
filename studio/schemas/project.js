export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'featured',
			title: 'Is this a Featured project?',
			type: 'boolean'
		},
		{
			name: 'treehouse',
			title: 'Is this a Treehouse project?',
			type: 'boolean'
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' }
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true
					}
				}
			]
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [ { type: 'reference', to: { type: 'category' } } ]
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent'
		}
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage'
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`
			});
		}
	}
};
