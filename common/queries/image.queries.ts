import { groq } from "next-sanity";

export const IMAGE_QUERY = groq`{
    ...,
    "url": asset->url,
}`