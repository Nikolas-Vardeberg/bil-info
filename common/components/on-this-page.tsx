"use client"

import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { slugify } from "@/utils/string";

export default function OnThisPage({ value }: { value: any[] }) {
	// get all h2 on the page
	const headings = useMemo(() => {
		const h2s = value
			?.filter((x) => x.style === 'h2')
			?.map((x) => ({
				id: x._key,
				textContent: x.children[0].text,
				slug: slugify(x.children[0].text),
			}));

		return h2s ?? [];
	}, [value]);

	if (!headings.length || headings.length < 2) return null;

	const [activeSection, setActiveSection] = useState<string>(headings?.[0]?.slug ?? '');

	useEffect(() => {
		const observerOptions = {
			rootMargin: '-45% 0px -45% 0px',
			threshold: [0, 1],
		};

		const observerCallback: IntersectionObserverCallback = (entries) => {
			const visibleHeadings = entries
				.filter((entry) => entry.isIntersecting)
				.map((entry) => ({
					id: entry.target.id,
					ratio: entry.intersectionRatio,
				}));

			if (visibleHeadings.length > 0) {
				const mostVisible = visibleHeadings.reduce((prev, current) =>
					current.ratio > prev.ratio ? current : prev,
				);

				setActiveSection(mostVisible.id);
			}
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);

		for (const heading of headings) {
			const element = document.getElementById(heading.slug);
			if (element) observer.observe(element);
		}

		return () => observer.disconnect();
	}, [headings]);

	const handleClick = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		const offset = 120;

		if (element) {
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth',
			});
		}
	};

	return (
		<nav className='flex left-0 flex-col p-4 gap-4 items-start justify-between'>
            <h4 className="text-2xl">Innhold</h4>
			{headings.map((heading, i) => (
				<div key={`${i}`} className="flex flex-col items-center">
					<Button
						variant="ghost"
						onClick={() => handleClick(heading.slug)}
						type='button'
                        key={`${heading.id}-${i}`}
						className={cn(
							'flex gap-x-2 items-center group transition-all ease-in-out duration-300 text-gray-600',
							activeSection === heading.slug && 'font-extrabold scale-105 text-black',
						)}
					>
						<div
							className={cn(
								'size-3 aspect-square rounded-full transition-colors ease-in-out duration-300 ',
								activeSection === heading.slug ? 'bg-green-500' : 'bg-border group-hover:bg-green-500',
							)}
						/>
						<p className='text-base'>{heading.textContent}</p>
					</Button>
				</div>
			))}
		</nav>
	);
}