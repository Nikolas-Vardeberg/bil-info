import { urlFor } from '@/sanity/lib/image';
import { BilImage, Nullable } from '@/types/root.types';
import Image from 'next/image';

type Props = {
	quality?: number;
	image?: BilImage;
	className?: string;
	sanityFill?: boolean;
} & (
	| {
			width: number;
			height: number;
			fill?: never;
	  }
	| {
			fill: boolean;
			width?: never;
			height?: never;
	  }
);

export default function SanityImage({ image, quality = 80, fill, height, width, sanityFill, ...props }: Props) {
	if (!image || !image || !image) return null;

	const alt = image.alt || ((image as BilImage)?.alt as Nullable<string> | undefined);

	if (typeof fill !== 'boolean' && (!width || !height)) {
		return null;
	}

	return (
		<Image
			src={
				typeof fill === 'boolean'
					? urlFor(image).quality(quality).url()
					: sanityFill
						? urlFor(image).quality(quality).url()
						: urlFor(image).width(width).height(height).quality(quality).url()
			}
			alt={alt || 'Ingen alternativ tekst'}
			quality={quality}
			fill={fill}
			width={width}
			height={height}
			loading='lazy'
			{...props}
		/>
	);
}