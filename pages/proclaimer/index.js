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

export default function Proclaimer() {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "proclaimer"]{
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

	console.log('allPosts');
	console.log(allPosts);

	return (
		<Layout>
			<Head>
				<title>Proclaimer – Pieter Roozen</title>
				<meta
					property="og:title"
					content="Proclaimer – Pieter Roozen"
				/>
				<meta
					name="description"
					content="Gedreven ontwerpen met typografie, content
					en sterke verhalen"
				/>
			</Head>
			<div className="container-x">
				<div className="heading-image hidden md:block z-10">
					<Image
						// loader={myLoader}
						src="/img/tyger.jpg"
						alt="Proclaimer"
						// layout="fill"
						width={2680}
						height={870}
					/>
				</div>
				<div className="container-project colofon unvisable slide work-grid-item">
					{/* <h1>{allPosts.title}</h1> */}
					<BlockContent
						className="kramdown"
						blocks={allPosts.body}
						projectId={sanityClient.clientConfig.projectId}
						dataset={sanityClient.clientConfig.dataset}
					/>
					<p>
						Stuur een email naar:&nbsp;
						<a
							className="text-21 font-300"
							href={`mailto: pieter@roozen.nl`}
							target="_blank"
							rel="noopener noreferrer"
						>
							pieter@roozen.nl
						</a>
					</p>
				</div>
			</div>
		</Layout>
	);
}
