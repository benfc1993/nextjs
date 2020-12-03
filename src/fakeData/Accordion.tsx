import React from 'react'
import { Text, List, ListItem } from '@chakra-ui/core'
import { ui } from '@peracto-library/shared'

const { Stack } = ui

export default [
    {
        title: `Product description`,
        content: (
            <Stack>
                <Text mb={`10px`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </Text>
                <Text fontWeight={`bold`} mb={`15px`}>
                    Top Features
                </Text>
                <List>
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </ListItem>
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </ListItem>
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua
                    </ListItem>
                </List>
            </Stack>
        ),
    },
    { title: `Delivery and returns`, content: <p>TBD</p> },
    { title: `Reviews and ratings`, content: <p>TBD</p> },
    { title: `Find in store`, content: <p>TBD</p> },
]
