import { groq } from "next-sanity";
import { IMAGE_QUERY } from "../image.queries";
import { RICH_TEXT_QUERY } from "../rich-text.queries";
import { TAG_QUERY } from "../tags.queries";

const RAW_ARTICLE_QUERY = groq`{
    _id,
    _type,
    title,
    mainImage ${IMAGE_QUERY},
    entry[]${RICH_TEXT_QUERY},
    content[]${RICH_TEXT_QUERY},
    tags[]${TAG_QUERY},
    "slug": slug.current,
}`;

export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0] ${RAW_ARTICLE_QUERY}`;

export const LATEST_ARTICLES = groq`*[_type == "article"] | order(publishedAt desc) [0..2] ${RAW_ARTICLE_QUERY}`;