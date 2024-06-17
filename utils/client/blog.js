import matter from 'gray-matter'

import { getPlaiceholder } from 'plaiceholder'

const getPosts = (fs) => {
	const postsFiles = fs.readdirSync(`${process.cwd()}/posts`, 'utf-8')
	const postsContent = postsFiles.map((blog) => ({content: fs.readFileSync(`${process.cwd()}/posts/${blog}/index.md`, { encoding: 'utf-8' }), slug: blog}))
	const relatedData = postsContent.map(r => ({data: matter(r).data, slug: r.slug}))
	const relatedFiltered = relatedData.filter(r => r.data.published)
	return relatedFiltered
}
export { getPosts }

const getPostsWithPlaceholders = async (fs) => {
	const postsFiles = getPosts(fs)

	const postsP = postsFiles.map(async (p) => {
		const contentData = p.data

		const data = { ...contentData }
		data.date = +contentData.date
		data.image = `/posts/${p.slug}${contentData.image}`
		const imageBuffer = await fs.readFileSync(`${process.cwd()}/public/${data.image}`)
		// https://dev.to/arrofirezasatria/creating-blur-placeholder-images-using-next-js-and-plaiceholder-5ckh
		const imageBlur = await getPlaiceholder(imageBuffer)
		data.imageBlur = imageBlur.base64

		return ({data, slug: p.slug})
	})
	const posts = await Promise.all(postsP)
  return posts
}
export { getPostsWithPlaceholders }

const getPost = (fs, slug) => {
	const data = fs.readFileSync(`${process.cwd()}/posts/${slug}/index.md`, { encoding: 'utf-8' })
	const post = matter(data)
	post.data.date = +post.data.date
	post.orig = 0
	return post
}
export { getPost }
