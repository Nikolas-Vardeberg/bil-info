import { defineType } from "sanity";
import { getDefaultBlockSetup } from "./defaults";
import { TextIcon } from "lucide-react";

export const richText = defineType({
	name: 'richText',
	type: 'array',
	icon: TextIcon,
	of: [
		...getDefaultBlockSetup({
			headingLevels: ['h2', 'h3', 'h4', 'h5'],
			lists: true,
		}),
	],
});

export const simpleRichText = defineType({
	name: 'simpleRichText',
	type: 'array',
	icon: TextIcon,
	of: [...getDefaultBlockSetup({})],
});