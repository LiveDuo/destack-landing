export { getStaticProps } from 'destack/build/server'
import { ContentProvider } from 'destack'

import SocialHead from '../components/Social'

const Index = (props) => {
    return (
    <>
        <SocialHead/>
        <div style={{ height: '100%' }}>
            <ContentProvider {...props} />
        </div>
    </>
    )
}
export default Index
