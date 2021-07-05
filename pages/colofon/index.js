import React, { Fragment, useState, useEffect } from 'react';
import sanityClient from '../../client.js';
// import { useParams } from 'react-router-dom';
import Image from 'next/image';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import Layout from '../../components/layout.js';

// https://p9o8p559.api.sanity.io/v1/data/query/production?query=*[0]

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

// const myLoader = ({ src, width, quality }) => {
// 	return `https://www.pieterroozen.nl/${src}?w=${width}&q=${quality || 75}`;
// };

export default function Colofon() {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "colofon"]{
            title,
            body,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`
			)
			.then((data) => setAllPosts(data[0]))
			.catch(console.error);
	}, []);

	// console.log('allPosts');
	// console.log(allPosts);

	return (
		<Layout>
			<Head>
				<title>Colofon</title>
				<meta property="og:title" content="Colofon" />
				<meta
					name="description"
					content="Gedreven ontwerpen met typografie, content
					en sterke verhalen"
				/>
			</Head>
			<div className="max-w-screen-lg m-auto mt-72">

				<div className="unvisable slide work-grid-item">
					<BlockContent
						className="kramdown"
						blocks={allPosts.body}
						projectId={sanityClient.clientConfig.projectId}
						dataset={sanityClient.clientConfig.dataset}
					/>
				</div>
			</div>
		</Layout>
	);
}
