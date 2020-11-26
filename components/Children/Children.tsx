import React from 'react'

export type ChildrenProps = {
    items: { linkText: string }[]
}

export const Children: React.FC<ChildrenProps> = (props) => {
    const { items } = props
    return (
        <>
            {items?.map((item) => (
                <p>{item.linkText}</p>
            ))}
        </>
    )
}
