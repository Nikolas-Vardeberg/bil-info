import { groq } from "next-sanity";

export const TAG_QUERY = groq`{
    _id,
    _type,
    title,
    "slug": slug.current,
}`;