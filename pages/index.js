import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

// https://p9o8p559.api.sanity.io/v1/data/query/production?query=*[0]


const Home = () => {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "studio"]{
            title,
            email,
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
				<title>Studio Roozen</title>
				<meta property="og:title" content="Studio Roozen" />
				<meta
					name="description"
					content="Gedreven ontwerpen met typografie, content
					en sterke verhalen"
				/>
			</Head>
			<Fragment>
      <div className="max-w-screen-lg m-auto unvisable slide work-grid-item">
					<p className="mb-24 fira-100 lg:fira-300 text-24 lg:text-36 pt-18 w-250 lg:w-550">
						studio roozen was een multidisciplinair ontwerpbureau,
						onder leiding van{' '}
						<Link href="/pieterroozen">
								<a className="text-red-500 hover:text-black hover:font-300 border-b border-red-500">
									pieter roozen
								</a>
							</Link>,
						gespecialiseerd in redactionele vormgeving.
					</p>
					<p className="fira-100 text-24 lg:text-36 text-red-500 w-250 lg:w-550">
						sinds <span className="text-31 lg:text-32">2015</span>{' '}
						werkt pieter roozen weer zelfstandig.
					</p>
					<p></p>

					<div className="mt-72 unvisable slide work-grid-item">
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
};

export default Home;
