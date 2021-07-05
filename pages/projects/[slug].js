import React, { Fragment, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Layout from '../../components/layout';
import Image from 'next/image';
import Head from 'next/head';
import sanityClient from '../../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client.js';
import { postSlugQuery } from '../../lib/queries';

// https://p9o8p559.api.sanity.io/v1/data/query/production?query=*[0]

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const Project = (postData) => {
	return (
		<Fragment>
			<Layout>
				<Head>
					<title>{postData.title}</title>
					<meta property="og:title" content={`${postData.title}`} />
					<meta name="description" content={postData.project} />
				</Head>
				
				<div className="max-w-full m-auto px-20 mt-100 unvisable slide work-grid-item">
					<h1 className={`max-w-screen-md m-auto text-center text-72 pb-36 fira-100 ${postData.color}`}>{postData.title}</h1>
					<BlockContent
						className="kramdown project"
						blocks={postData.body}
						projectId={sanityClient.clientConfig.projectId}
						dataset={sanityClient.clientConfig.dataset}
					/>
				</div>
			</Layout>
		</Fragment>
	);
};

Project.getInitialProps = async function (context) {
	const postData = context.query;
	return await client.fetch(postSlugQuery, postData);
};

export default Project;
