import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';
import sanityClient from '../../client.js';
import BlockContent from '@sanity/block-content-to-react';

export default function Pieterroozen() {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "about"]{
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
				<title>Pieter Roozen</title>
				<meta property="og:title" content="Pieter Roozen" />
				<meta
					name="description"
					content="Gedreven ontwerpen met typografie, content
					en sterke verhalen"
				/>
			</Head>
			<Fragment>
				<div className="max-w-screen-lg m-auto px-18 unvisable slide work-grid-item">
					<p className="mb-24 fira-100 lg:fira-300  text-24 lg:text-36 text-red-500 pt-18 w-full md:w-75 lg:w-550">
						pieter roozen is een enthousiaste, veelzijdige en
						resultaat gerichte ontwerper met passie voor typografie,
						content en sterke verhalen.
					</p>
					<p className="mb-24 fira-100 text-24 lg:text-36 text-black w-full md:w-75 lg:w-550">
						bakt dagelijks zuurdesembrood, gaat bergklimmen op skies
						en solozeilen op zee. vader van vier, partner van ruth.
					</p>
					<div className="unvisable slide work-grid-item">
						<BlockContent
							className="kramdown"
							blocks={allPosts.body}
							projectId={sanityClient.clientConfig.projectId}
							dataset={sanityClient.clientConfig.dataset}
						/>
					</div>
				</div>
			</Fragment>
		</Layout>
	);
}
