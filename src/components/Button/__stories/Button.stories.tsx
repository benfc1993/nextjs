import React from 'react'
import { Button, ButtonProps } from '..'
import { Text } from '../../Text'
import * as shared from '@peracto-library/shared'

export default {
    title: 'Button',
    component: Button,
}

const baseArgs = {
    children: 'Example Text',
}

export const Default = (args: ButtonProps) => <Button {...args} />
Default.args = baseArgs

export const Solid = (args: ButtonProps) => <Button {...args} />
Solid.args = { ...baseArgs, variantStyle: 'solid' }

/* export const Primary = (args: ButtonProps) => ( */
/*     <shared.ui.Container mt={8} center isInline> */
/*         <Text mr={2}>primary:</Text> */
/*         <Button {...args} variant={`primary`} variantStyle={`solid`} mx={2}> */
/*             Solid */
/*         </Button> */
/*         <Button {...args} variant={`primary`} variantStyle={`outline`} mx={2}> */
/*             Outline */
/*         </Button> */
/*         <Button {...args} variant={`primary`} variantStyle={`ghost`} mx={2}> */
/*             Ghost */
/*         </Button> */
/*         <Button {...args} variant={`primary`} variantStyle={`link`} mx={2}> */
/*             Link */
/*         </Button> */
/*     </shared.ui.Container> */
/* ) */
