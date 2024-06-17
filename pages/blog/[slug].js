import React from 'react'

import NextImage from 'next/image'
import Link from 'next/link'

import ReactMarkdown from "react-markdown"

import SocialHead from '../../components/Head'

import { getPost, getPosts } from '../../utils/client/blog'

export const getStaticPaths = async () => {
	const fs = require('fs')
	const paths = getPosts(fs).map(p => ({ params: { slug: p.slug } }))
	return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
	const slug = context.params.slug

	const fs = require('fs')
	const post = getPost(fs, slug)

	const posts = getPosts(fs)
	const postsMapped = posts.map(r => ({ title: r.data.title, slug: r.slug }))
	const postsRelated = postsMapped.filter((fn) => !fn.slug.startsWith(slug)).slice(0, 3)

	return { props: { slug, post, relatedPosts: postsRelated } }
}

const renderers = { image: image => <NextImage src={image.src} alt={image.alt} width={480} height={320} placeholder="blur" blurDataURL={image.imageBlur}/> }

const Article = ({post: data, relatedPosts, slug}) => {
	const c = data
	const d = relatedPosts
	const isMobile = false // TODO
	return (
		<>
			<SocialHead title={`${c.data.title} | Destack`} description={c.data.description} image={c.data.image}/>
			<div className={`flex justify-center ${!isMobile ? "p-12" : "p-6"}`}>
				<div className={`max-w-5xl`}>
					<div>
						<div className="mb-24 flex items-center">
							<Link href="/blog">
								<h3 className={!isMobile ? "text-xl m-0 hover:opacity-50" : "text-md m-0 hover:opacity-50"}>
									← All Posts
									{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block ml-2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
									</svg> */}
								</h3>
							</Link>
						</div>
					</div>
					<div className="relative mb-16">
						<NextImage className="rounded-lg mb-12" src={`/posts/${slug}${c.data.image}`} objectFit="cover" height={600} width={720} alt={c.data.description}/>
						<div className="flex justify-start">
							<h1 className="mt-1 text-center max-w-full text-2xl mb-2">
								<span style={{backgroundColor: 'white', padding: '8px', lineHeight: 1.8}}>{c.data.title}</span>
							</h1>
						</div>
						<div className="flex justify-start">
							<div className="flex flex-row justify-start items-center">
								{c.data.tags.map((tag, i) => 
									<span key={i} className="inline-block mr-1 px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
										{tag}
									</span>
								)}
							</div>
						</div>
					</div>
					<div className="max-w-2xl">
						<div className="flex flex-1 flex-col justify-center mt-3 sm:mt-0 mb-12">
							<div className="markdown-body prose">
								<ReactMarkdown components={renderers}>{c.content}</ReactMarkdown>
							</div>
						</div>
						{d.length > 0 && <div className="mb-2">
							<h2 className="text-lg">Related Posts</h2>
							<div className="flex flex-col mt-4">
								{d.map((r, i) => <div key={i}>
									<Link href={r.slug}>
										<span className="text-lg mb-2">{r.title}</span>
									</Link>
								</div>)}
							</div>
						</div>}
						<div className="mt-2">
							<hr />
							<div className="text-lg mt-4"> If you need a landing page check out <Link href={'/'} className="hover:opacity-80">Destack</Link></div>
							<div className="text-lg mt-4"> 👉 It's free, open sourced and has no external dependencies.</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Article