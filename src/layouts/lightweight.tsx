import { Shared } from './shared'
const LightWeight: React.FC = (props) => {
    const { children } = props

    return <Shared>{children}</Shared>
}

export const getLayout = (page: React.ReactNode) => <LightWeight>{page}</LightWeight>

export default LightWeight
