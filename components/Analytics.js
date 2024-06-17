import Script from 'next/script'

const ganalyticsId = 'G-5M4N1R4P8V'
const ganalyticsSrc = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${ganalyticsId}');
`

const AnalyticsHead = () => (
	<>
		<Script async src={`https://www.googletagmanager.com/gtag/js?id=${ganalyticsId}`} />
		<Script dangerouslySetInnerHTML={{ __html: ganalyticsSrc }} />
	</>
)
export default AnalyticsHead