import { Image } from 'lucide-react';
import { defineField } from 'sanity';

type Props = {
	name?: string;
	group?: string;
};

export const image = ({ name, group }: Props) => {
	return defineField({
		type: 'image',
		title: 'Bilde',
		icon: Image,
		options: {
			hotspot: true,
		},
		fields: [
			{
				name: 'alt',
				type: 'string',
				title: 'Alternativ tekst',
				description: 'Beskriv bildet for noen som ikke kan se det.',
			},
		],
        group: group,
		name: name || 'image',
		preview: {
			select: {
				title: 'asset.originalFilename',
				subtitle: 'asset.description',
				media: 'asset',
			},
		},
	});
};