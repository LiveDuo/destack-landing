import Head from 'next/head'

const ganalyticsId = 'G-5M4N1R4P8V'
const ganalyticsSrc = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${ganalyticsId}');
`

const AnalyticsHead = () => (
	<Head>
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${ganalyticsId}`} />
		<script dangerouslySetInnerHTML={{ __html: ganalyticsSrc }} />
	</Head>
)
export default AnalyticsHead