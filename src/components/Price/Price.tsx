import React, { useState } from 'react'
import { Text, Input, FormLabel, Link, LinkProps } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/pro-solid-svg-icons'
import { Button } from '..'
import * as shared from '@peracto-library/shared'

export type PriceProps = {
    product: shared.types.Product
    incTax?: boolean
    inStock?: boolean
    loggedIn?: boolean
    /** onClick (`React.MouseEvent`) method to execute when adding the item to the basket. */
    onAddToBasket?: (
        event: React.MouseEvent<any, MouseEvent>,
        product: shared.types.Product,
        quantity: number,
    ) => void
    /** onClick (`React.MouseEvent`) method to execute when adding the item to a quote. */
    onAddToQuotes?: (
        event: React.MouseEvent<any, MouseEvent>,
        product: shared.types.Product,
        quantity: number,
    ) => void
    signInLinkProps?: LinkProps
} & shared.ui.StackProps

export const Price: React.FC<PriceProps> = (props) => {
    const { product, incTax, inStock, loggedIn, onAddToBasket, onAddToQuotes, ...restProps } = props
    const { multipleOfSaleQuantity } = product
    const [quantity, setQuantity] = useState(multipleOfSaleQuantity || 1)
    return (
        <shared.ui.Stack
            d={`inline-flex`}
            border={`1px solid`}
            borderColor={`brand.grey`}
            p={`15px`}
            pb={0}
            position={`relative`}
            w={{ base: `100%`, md: `270px` }}
            {...restProps}
        >
            {loggedIn && <LoggedInContent {...props} />}
            {!loggedIn && <LoggedOutContent {...props} />}
            <shared.ui.Stack
                w={`100%`}
                h={`1px`}
                minH={`1px`}
                backgroundColor={`brand.grey`}
                my={4}
            />
            <shared.ui.Stack isInline mb={3}>
                {inStock && (
                    <shared.ui.Stack isInline centerY fontSize={`12px`} lineHeight={`18px`}>
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{ width: `14px`, height: `14px`, display: `block` }}
                        />
                        <Text ml={`15px`} fontWeight={`bold`}>
                            In stock
                        </Text>
                    </shared.ui.Stack>
                )}
                {!inStock && (
                    <shared.ui.Stack isInline centerY fontSize={`12px`} lineHeight={`18px`}>
                        <FontAwesomeIcon
                            icon={faTimesCircle}
                            style={{ width: `14px`, height: `14px`, display: `block` }}
                        />
                        <Text ml={`15px`} fontWeight={`bold`}>
                            Out of stock
                        </Text>
                    </shared.ui.Stack>
                )}
            </shared.ui.Stack>
            <shared.ui.Stack isInline centerY d={`inline-flex`} mb={4}>
                <FormLabel htmlFor={`quantity`}>
                    <Text fontSize={14} mr={4} {...(!loggedIn && { color: `brand.grey` })}>
                        Quantity
                    </Text>
                </FormLabel>
                <Input
                    id={`quantity`}
                    value={quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setQuantity(parseInt(e.target.value))
                    }
                    type={`number`}
                    maxW={`60px`}
                    fontSize={16}
                    border={`1px solid`}
                    borderColor={`brand.grey`}
                    _focus={{ borderColor: `brand.black` }}
                    variant={`outline`}
                    size={`md`}
                    textAlign={`center`}
                    {...(!loggedIn && {
                        cursor: `not-allowed`,
                        borderColor: `brand.grey`,
                        color: `brand.grey`,
                        opacity: 1,
                        _focus: {
                            borderColor: '',
                            outline: 'none',
                        },
                    })}
                    min={
                        multipleOfSaleQuantity && multipleOfSaleQuantity > 1
                            ? multipleOfSaleQuantity
                            : 1
                    }
                    step={multipleOfSaleQuantity ? multipleOfSaleQuantity : 1}
                />
            </shared.ui.Stack>
            <Button
                variant={`primary`}
                variantStyle={`solid`}
                mb={`15px`}
                {...(typeof onAddToBasket === 'function' && {
                    onClick: function (e: React.MouseEvent<any, MouseEvent>) {
                        onAddToBasket(e, product, quantity)
                    },
                })}
                isDark
                {...(!loggedIn && {
                    backgroundColor: `brand.grey`,
                    cursor: `not-allowed`,
                    boxShadow: `none`,
                    _hover: { backgroundColor: `` },
                    _active: { backgroundColor: `` },
                    _focus: { outline: `none` },
                })}
            >
                ADD TO BASKET
            </Button>
            <Button
                variant={`primary`}
                variantStyle={`outline`}
                mb={`15px`}
                {...(typeof onAddToQuotes === 'function' && {
                    onClick: function (e: React.MouseEvent<any, MouseEvent>) {
                        onAddToQuotes(e, product, quantity)
                    },
                })}
                {...(!loggedIn && {
                    color: `brand.grey`,
                    borderColor: `brand.grey`,
                    cursor: `not-allowed`,
                    boxShadow: `none`,
                    _hover: { backgroundColor: `` },
                    _active: { backgroundColor: `` },
                    _focus: { outline: `none` },
                })}
            >
                ADD TO QUOTES
            </Button>
        </shared.ui.Stack>
    )
}
Price.defaultProps = {
    incTax: true,
    inStock: true,
    loggedIn: false,
    onAddToBasket: function (_e, product) {
        console.log('Clicking onAddToBasket link', product)
    },
    onAddToQuotes: function (_e, product) {
        console.log('Clicking onAddToQuotes link', product)
    },
}

const LoggedInContent: React.FC<PriceProps> = (props) => {
    const {
        product: { prices },
        incTax,
    } = props
    return (
        <shared.ui.Stack fontFamily={`body`}>
            <shared.ui.Stack isInline flexWrap={`wrap`}>
                {prices?.rrp && (
                    <shared.ui.Price
                        includeTax={incTax}
                        price={{
                            value: { inc: prices.rrp.inc, ex: prices.rrp.exc },
                            label: 'RRP ',
                        }}
                        strikethroughValue
                        containerProps={{
                            color: `brand.darkGrey`,
                            fontSize: 14,
                            lineHeight: `24px`,
                            mr: `15px`,
                        }}
                    />
                )}
                {prices?.salePrice && (
                    <shared.ui.Price
                        includeTax={incTax}
                        price={{
                            value: { inc: prices.salePrice.inc, ex: prices.salePrice.exc },
                            label: 'Was ',
                        }}
                        strikethroughBoth
                        color={`brand.darkGrey`}
                        fontSize={14}
                        lineHeight={`24px`}
                        mr={`15px`}
                    />
                )}
                {prices?.clearancePrice && (
                    <shared.ui.Price
                        includeTax={incTax}
                        price={{
                            value: {
                                inc: prices.clearancePrice.inc,
                                ex: prices.clearancePrice.exc,
                            },
                            label: 'Was ',
                        }}
                        strikethroughBoth
                        color={`brand.darkGrey`}
                        fontSize={14}
                        lineHeight={`24px`}
                        mr={`15px`}
                    />
                )}
            </shared.ui.Stack>
            {prices?.price && (
                <shared.ui.Stack isInline centerY>
                    <shared.ui.Price
                        includeTax={incTax}
                        price={{
                            value: { inc: prices.price.inc, ex: prices.price.exc },
                            label: 'Now ',
                        }}
                        sharedProps={{ fontSize: 24, lineHeight: `30px`, fontWeight: `bold` }}
                        mr={`10px`}
                    />
                    {incTax ? (
                        <shared.ui.Stack
                            color={`#222222`}
                            fontSize={10}
                            fontWeight={`bold`}
                            lineHeight={`10px`}
                        >
                            <shared.ui.Span>INC.</shared.ui.Span>
                            <shared.ui.Span>VAT</shared.ui.Span>
                        </shared.ui.Stack>
                    ) : (
                        <shared.ui.Stack fontSize={10} fontWeight={`bold`} lineHeight={`10px`}>
                            <shared.ui.Span>EXC.</shared.ui.Span>
                            <shared.ui.Span>VAT</shared.ui.Span>
                        </shared.ui.Stack>
                    )}
                </shared.ui.Stack>
            )}
        </shared.ui.Stack>
    )
}

export const LoggedOutContent: React.FC<PriceProps> = (props) => {
    const { signInLinkProps } = props
    return (
        <shared.ui.Stack>
            <Text
                fontWeight={`bold`}
                fontSize={{ base: `18px`, lg: `24px` }}
                lineHeight={`24px`}
                color={`brand.red`}
            >
                <Link {...signInLinkProps}>Sign in</Link> for prices
            </Text>
            <Text
                fontSize={{ base: `10px`, lg: `13px`, xl: `14px` }}
                lineHeight={`24px`}
                color={`brand.black`}
            >
                or{' '}
                <Link href={`#`} color={`brand.red`} textDecor={`underline`}>
                    apply
                </Link>{' '}
                for a trade account online
            </Text>
        </shared.ui.Stack>
    )
}
