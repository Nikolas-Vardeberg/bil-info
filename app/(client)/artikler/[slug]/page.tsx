import { ARTICLE_QUERY } from "@/queries/pages/articles.queries";
import { sanityFetch } from "@/sanity/lib/live"
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        slug: string;
    }>
}

const getHook = async({ params }: { params: QueryParams }) => {
    return await sanityFetch({query: ARTICLE_QUERY, params });
}


export default async function ArticlePage(props: Props) {
    const params = await props.params;
    const initial = await getHook({ params });

    if (!initial || !initial.data) return notFound();

    return(
        <pre>
            {JSON.stringify(initial.data, null, 2)}
        </pre>
    )
}