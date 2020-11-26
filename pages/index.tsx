import { Header } from '../components/Header/Header'
import { Children } from '../components/Children/Children'

import { GetServerSideProps } from 'next'
import { Button, Link } from '@chakra-ui/core'

export default function Home(props) {
    const { product, menu } = props
    console.log(menu)
    return (
        <>
            <p>{product.sku}</p>
            <Header title={'hellloooo'} text={'this is the text'} />
            {menu?.menuItems?.map((item) => (
                <>
                    <Link href={item.path}>
                        <p>{item?.linkText}</p>
                        {item?.filteredChildren.length > 0 && (
                            <Children items={item.filteredChildren} />
                        )}
                    </Link>
                </>
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
    console.log(props)
    return { props }
}
