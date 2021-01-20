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
			name: 'oneLiner',
			title: 'One Line Project Description',
			type: 'string'
		},
		{
			name: 'githubLink',
			title: 'Github Link',
			type: 'string'
		},
		{
			name: 'liveLink',
			title: 'Live Demo Link',
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
			name: 'categories',
			title: 'Project Categories',
			type: 'array',
			of: [ { type: 'reference', to: { type: 'category' } } ]
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' }
		},
		{
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'images',
			title: 'Project Images',
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
			name: 'title1',
			title: 'Title Section #1',
			type: 'string'
		},
		{
			name: 'sectionIcons1',
			title: 'Title Icons #1',
			type: 'array',
			of: [ { type: 'reference', to: { type: 'category' } } ]
		},
		{
			name: 'body1',
			title: 'Body Section #1',
			type: 'blockContent'
		},
		{
			name: 'title2',
			title: 'Title Section #2',
			type: 'string'
		},
		{
			name: 'sectionIcons2',
			title: 'Title Icons #2',
			type: 'array',
			of: [ { type: 'reference', to: { type: 'category' } } ]
		},
		{
			name: 'body2',
			title: 'Body Section #2',
			type: 'blockContent'
		},
		{
			name: 'title3',
			title: 'Title Section #3',
			type: 'string'
		},
		{
			name: 'sectionIcons3',
			title: 'Title Icons #3',
			type: 'array',
			of: [ { type: 'reference', to: { type: 'category' } } ]
		},
		{
			name: 'body3',
			title: 'Body Section #3',
			type: 'blockContent'
		},
		{
			name: 'title4',
			title: 'Title Section #4',
			type: 'string'
		},
		{
			name: 'sectionIcons4',
			title: 'Title Icons #4',
			type: 'array',
			of: [ { type: 'reference', to: { type: 'category' } } ]
		},
		{
			name: 'body4',
			title: 'Body Section #4',
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
