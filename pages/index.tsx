import dynamic from 'next/dynamic'
const Children = dynamic(() => import('../components/Children/Children'))
const Header = dynamic(() => import('../components/Header/Header'))

import { GetServerSideProps } from 'next'
import { Button, Link } from '@chakra-ui/core'

export default function Home(props) {
    const { product, menu } = props
    return (
        <>
            <p>{product.sku}</p>
            <Header title={'hellloooo'} text={'this is the text'} />
            {menu?.menuItems?.map((item, index) => (
                <Link href={item.path} key={index}>
                    <p>{item?.linkText}</p>
                    {item?.filteredChildren.length > 0 && (
                        <Children items={item.filteredChildren} />
                    )}
                </Link>
            ))}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props = {}
    await fetch(`https://staging-api.lamonasparescouk.pub/products/slug/washer-a07042166`)
        .then((response) => response.json())
        .then((data) => {
            props['product'] = data
        })
        .catch((e) => {})
    await fetch(`https://staging-api.lamonasparescouk.pub/menus/main_menu`)
        .then((response) => response.json())
        .then((data) => {
            props['menu'] = data
        })
        .catch((e) => {})
    return { props }
}
