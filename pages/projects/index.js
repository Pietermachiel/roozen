import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import sanityClient from '../../client.js';
import Layout from '../../components/layout';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function Projects() {
	const [allPosts, setAllPosts] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
            title,
						id,
						color,
						subtitle,
            project,
						lead,
            slug,
            year,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`
			)
			.then((data) => setAllPosts(data))
			.catch(console.error);
	}, []);

	console.log('allPosts');
	console.log(allPosts);

	// const postsSorted = allPosts.sort((a, b) => {
	// 	const aYear = parseInt(a.year);
	// 	const bYear = parseInt(b.year);
	// 	if (aYear < bYear) return aYear - bYear;
	// 	else return aYear;
	// });

	// console.log('postsSorted');
	// console.log(postsSorted);

	return (
		<Layout>
			<Head>
				<title>Projects</title>
				<meta property="og:title" content="Projects" />
				<meta
					name="description"
					content="Gedreven ontwerpen met typografie, content
					en sterke verhalen"
				/>
			</Head>
			<Fragment>
				<div className="max-w-screen-xl m-auto mt-84 lg:mt-100 mx-18">
				  <div className="flex lg:block flex-row flex-wrap justify-between">
							{allPosts &&
								allPosts
									.sort((a, b) => a.id - b.id)
									.map((post, index) => (
										<div
											key={post.slug.current}
											className="ko-box-right__outer"
										>
											<div className="lg:w-50">
												<Link
													aria-label={post.title}
													href={`/projects/${post.slug.current}`}
												>
													<a className="w-full lg:w-50">
														<div className="relative project-box_border"
														      style={{
																		position: "relative",
																		// width: "675px",
																		// height: "600px",
																		maxWidth: "675px",
																		maxHeight: "600px",
																	}}>
																<Image
																	src={urlFor(
																		post.mainImage.asset
																	).url()}
																	alt={post.title}
																	layout="responsive"
																	// style={{
																	// 	maxWidth: "675px",
																	// 	maxHeight: "600px",
																	// }}
																	height="600px"
																	width="675px"
																	className=""
																/>
																<div className="hidden lg:block w-full lg:absolute lg:top-0 p-42 lg:mt-0 mb-10 ">
																	<p className="lg:text-white lg:text-shadow tracking-widest uppercase lg:px-30 pt-18 text-21 lg:text-28 leading-tight fira-400">
																		{
																			post.project
																		}
																	</p>{' '}
																</div>{' '}
																<p className="hidden lg:block lg:absolute bottom-0 p-42 text-white ml-12 text-24 lg:text-36 leading-9">
																	{
																		post.year
																	}
																</p>
														</div>
													</a>
												</Link>																
											</div>
											<Fragment>
												<div className="hidden lg:block w-full lg:w-50">
													<div className="py-36 pl-36">
														<h1
															className={`text-36 lg:text-72 mb-20 fira-100 interlinie-11 ${post.color}`}
														>
															{
																post.title
															}
														</h1>
														<p
															className={`text-28 mb-20 fira-100 leading-snug ${post.color}`}
														>
															{
																post.subtitle
															}
														</p>													
														<p className="text-21 mb-20">
															<BlockContent
																className="kramdown interlinie-11"
																blocks={
																	post.lead
																}
																projectId={
																	sanityClient
																		.clientConfig
																		.projectId
																}
																dataset={
																	sanityClient
																		.clientConfig
																		.dataset
																}
															/>
														</p>
														<p className="text-24 lg:text-28 fira-400 leading-9">
															{
																post.year
															}
														</p>
													</div>
												</div>
											</Fragment>
										
											<Fragment>
												<div className="lg:hidden w-full lg:w-50">
													<div className="pt-10 pb-18 pl-18">
														<h1
															className={`text-21 sm:text-30 md:text-36 lg:text-72 mb-20 fira-100 interlinie-11 ${post.color}`}
														>
															{
																post.title
															}
														</h1>
														<p
															className={`text-17 sm:text-21 md:text-24 font-500 mb-20 -mt-15 leading-snug`}
														>
															{
																post.project
															}
														</p>
													</div>
												</div>
                     	</Fragment>
										</div>
									))}
						</div>
				</div>
			</Fragment>
		</Layout>
	);
}
