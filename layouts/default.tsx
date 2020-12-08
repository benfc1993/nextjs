import { Shared } from './shared'

export type DefaultProps = {
    isWhite?: boolean
}

const DefaultLayout: React.FC<DefaultProps> = (props) => {
    const { children, isWhite } = props

    return (
        <Shared {...(isWhite && { isWhite })}>
            {children}
        </Shared>
    )
}

export const getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>

export default DefaultLayout
