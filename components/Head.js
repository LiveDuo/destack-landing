import Head from 'next/head'

const defaultTitle = "Destack | Landing page builder"
const defaultDescription = "Build landing pages visually right in your React or Next.js projects. Deploy them zero further configuration!"
const defaultImage = '/cover.png'

const SocialHead = ({title = defaultTitle, description = defaultDescription, image = defaultImage, meta = []}) => {
	return (
	<Head>
		<title>{title}</title>
		{image && <meta name="image" content={image} />}
		{description && <meta name="description" content={description} />}
		<meta charSet="utf-8" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		{/* <link rel="manifest" href="/manifest.json" /> */}
		<link rel="shortcut icon" href="/favicon.ico" />

		<meta property="og:title" content={title} />
		{description && <meta property="og:description" content={description} />}
		{image && <meta property="og:image" content={image} />}
		<meta name="twitter:card" content="summary_large_image" />
		{typeof twitterUsername !== 'undefined' && <meta name="twitter:creator" content={twitterUsername} />}
		<meta name="twitter:title" content={title} />
		{description && <meta name="twitter:description" content={description} />}
		{image && <meta name="twitter:image" content={image} />}

		{meta.map((c, i) => <meta key={i} name={c.name} content={c.content} />)}
	</Head>
)}
export default SocialHead
