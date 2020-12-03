import React from 'react'
import { Text, TextProps } from '..'

export default {
    title: 'Text',
    component: Text,
}

const baseArgs = {
    children: 'Example Text',
}

export const Default = (args: TextProps) => <Text {...args} />
Default.args = baseArgs

export const Underline = (args: TextProps) => <Text {...args} />
Underline.args = {
    ...baseArgs,
    underline: true,
}

export const Strikethrough = (args: TextProps) => <Text {...args} />
Strikethrough.args = {
    ...baseArgs,
    strikethrough: true,
}

export const Uppercase = (args: TextProps) => <Text {...args} />
Uppercase.args = {
    ...baseArgs,
    uppercase: true,
}

export const Italic = (args: TextProps) => <Text {...args} />
Italic.args = {
    ...baseArgs,
    italic: true,
}

export const Centered = (args: TextProps) => <Text {...args} />
Centered.args = {
    ...baseArgs,
    center: true,
}
