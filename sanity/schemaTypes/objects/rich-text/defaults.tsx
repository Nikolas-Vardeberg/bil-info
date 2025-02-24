import type { ArrayOfType } from 'sanity';

export const getDefaultBlockSetup = ({
	headingLevels = [],
	lists = false,
	annotations,
}: {
	headingLevels?: Array<'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
	lists?: boolean;
	annotations?: ArrayOfType<'object' | 'reference', undefined>[];
}): Array<any> => {
	return [
		{
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				headingLevels.includes('h2') && {
					title: 'Overskrift h2',
					value: 'h2',
				},
				headingLevels.includes('h3') && {
					title: 'Overskrift h3',
					value: 'h3',
				},
				headingLevels.includes('h4') && {
					title: 'Overskrift h4',
					value: 'h4',
				},

				headingLevels.includes('h5') && {
					title: 'Overskrift h5',
					value: 'h5',
				},

				headingLevels.includes('h6') && {
					title: 'Overskrift h6',
					value: 'h6',
				},
			].filter(Boolean),
			marks: {
				decorators: [
					{ title: 'Fet', value: 'strong' },
					{ title: 'Kursiv', value: 'em' },
				],
				annotations: annotations ?? [],
			},
			lists: lists
				? [
						{ title: 'Nummerert liste', value: 'number' },
						{ title: 'Punktliste', value: 'bullet' },
					]
				: [],
		},
	];
};