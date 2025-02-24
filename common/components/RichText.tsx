import { PortableText as NativePortableText } from '@portabletext/react';
import { ReactNode } from "react";
import clsx from 'clsx';
import { RichtTextType } from '@/types/root.types';
import { slugify } from '@/utils/string';


export type SimpleRichTextProps = {
	blocks: RichtTextType;
	elementClassName?: string;
	classNameByType?: (type: string) => string;
	id?: string;
};

export type RichTextProps = {
	blocks: RichtTextType;
	elementClassName?: string;
	classNameByType?: (type: string) => string;
	id?: string;
};


export type PortableTextBlockType = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: (props: any) => ReactNode;
};

const types: PortableTextBlockType = {

}

const PortableTextWithComponents = ({ blocks, elementClassName }: RichTextProps) => {
    return(
        <div className={clsx('flex flex-col gap-5 lg:gap-7 portable-text')}>
            <NativePortableText
                value={blocks}
                components={{
                    block: {
                        h2: ({ children, value }) => {
                            const text = value?.children?.[0]?.text || '';
                            const slug = slugify(text);
                            return <h2 id={slug} className={clsx("p-h2", elementClassName)}>{children}</h2>;
                          },
                        h3: ({ children }) => <h3 className={clsx("p-h3", elementClassName)}>{children}</h3>,
                        h4: ({ children }) => <h4 className={clsx("p-h4", elementClassName)}>{children}</h4>,
                        normal: ({ children }) => <p className={clsx("p-p", elementClassName)}>{children}</p>,
                    },
                    list: {
                        bullet: ({ children, value }) => {
							if (value.level > 1) {
								return <ul className={clsx('p-ul', elementClassName)}>{children}</ul>;
							}
							return <ul className={clsx('p-ul', elementClassName)}>{children}</ul>;
						},
                        number: ({ children, value }) => {
							if (value.level > 1) {
								return <ul className={clsx('p-ul', elementClassName)}>{children}</ul>;
							}
							return <ol className={clsx('p-ol', elementClassName)}>{children}</ol>;
						},
                    }
                }}
            />
        </div>
    )
}


export default function RichText({ blocks, elementClassName, id }: RichTextProps) {
    return(
        <div className="w-full items-center justify-center" id={id}>
            <PortableTextWithComponents 
                blocks={blocks}
                elementClassName={elementClassName}
            />
        </div>
    )
}

export const RichTextSimple = ({ blocks, elementClassName }: SimpleRichTextProps) => (
	<PortableTextWithComponents
		blocks={blocks}
		elementClassName={elementClassName}
	/>
);