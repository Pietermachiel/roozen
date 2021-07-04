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
				<div className="max-w-screen-xl m-auto mt-100">
					<div className="">
						<div className="">
							{allPosts &&
								allPosts
									.sort((a, b) => a.id - b.id)
									.map((post, index) => (
										<Fragment key={post.slug.current}>
											<div className="mb-18 lg:mb-48">
												<Link
													aria-label={post.title}
													href={`/projects/${post.slug.current}`}
												>
													<a>
														<div className="-ml-18 flex md:flex-row md:justify-inbetween ">
															<div className="project-box project-box_border">
																<figure className="relative">
                                  <Image
                                    src={urlFor(
                                      post.mainImage.asset
                                    ).url()}
                                    alt={post.title}
                                    layout="fill"
                                    // height="600px"
                                    // width="675px"
                                    // className="w-full"
                                  />
																	<figcaption className="absolute top-0 p-42 lg:mt-0 mb-10 ">
																		<p className="text-white text-shadow tracking-widest uppercase lg:px-30 pt-18 text-21 lg:text-28 leading-tight fira-400">
																			{
																				post.project
																			}
																		</p>{' '}
																	</figcaption>{' '}
																	<p className="absolute bottom-0 p-42 text-white ml-12 text-24 lg:text-36 leading-9">
																		{
																			post.year
																		}
																	</p>
																</figure>
															</div>
															<div className="project-box ">
																<div className="py-36 pl-36">
																	<h1
																		className={`text-72 mb-20 fira-100 interlinie-11 ${post.color}`}
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
																		{/* {post.lead[0].children.map(
																			(
																				c
																			) =>
																				c.text
																		)} */}
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
														</div>
													</a>
												</Link>
											</div>
										</Fragment>
									))}
						</div>
					</div>
				</div>
			</Fragment>
		</Layout>
	);
}
