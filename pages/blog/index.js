import React from 'react'

import NextImage from 'next/image'
import Link from 'next/link'

import SocialHead from '../../components/Head'

import { getPostsWithPlaceholders } from '../../utils/client/blog'

export const getStaticProps = async () => {
	const fs = require('fs')
	const posts = await getPostsWithPlaceholders(fs)
	const postsSorted = posts.sort((a, b) => b.data.date - a.data.date)
	return { props: { posts: postsSorted } }
}

const ArticleList = ({posts}) => {
	return (
		<>
			<SocialHead/>
			<div className="max-w-7xl p-12">
				<div className="mb-24 flex items-center">
					<h1 className="text-3xl font-bold">Blog Posts</h1>
				</div>
				{posts.map((c, i) =>
					<div key={i} className="mt-1 sm:mt-5 flex flex-col sm:flex-row justify-between mb-30">
						<div className="flex flex-1 mr-3 relative items-center">
							<div className="w-full sm:w-4/5 z-20 ml-0 sm:ml-5 mt-5">
								<NextImage className="rounded-lg mx-auto" src={c.data.image} objectFit="cover" width={560} height={340} alt={c.data.description} placeholder="blur" blurDataURL={c.data.imageBlur} style={{height: 'auto'}}/>
							</div>
						</div>
						<div className="flex flex-1 flex-col justify-center mt-3 sm:mt-0">
							<div className="mb-3">
								{c.data.tags.map((tag, i) => 
									<span key={i} className="inline-block px-3 mr-1 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
										{tag}
									</span>
								)}
							</div>
							<h3 className="mb-3 text-xl font-semibold">
								<Link href={`/blog/${c.slug}`} className="hover:opacity-50">{c.data.title}</Link>
							</h3>
							<p className="mb-3 text-lg">{c.data.description}</p>
							<Link href={`/blog/${c.slug}`} className="flex items-center hover:opacity-50">
								<span className="font-semibold">READ ON</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-1">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
								</svg>
							</Link>
						</div>
					</div>
				)}
			</div>
		</>

	)
}

export default ArticleList
