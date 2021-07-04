import groq from 'groq';

export const postFields = `
title,
project,
slug,
year,
color,
mainImage{
  asset->{
    _id,
    url
  }
},
body,
"name": author->name,
"authorImage": author->image
`;

export const postQuery = groq`
*[_type == "post"]{
  ${postFields}
}`;

export const postSlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  ${postFields}
}`;
