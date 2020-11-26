import React from 'react'

export type ChildrenProps = {
    items: { linkText: string }[]
}

const Children: React.FC<ChildrenProps> = (props) => {
    const { items } = props
    return (
        <>
            {items?.map((item, index) => (
                <p key={index}>{item.linkText}</p>
            ))}
        </>
    )
}

export default Children
