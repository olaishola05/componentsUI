import React from 'react'
import Input from './Input'


export default {
    title: 'form/Input',
    component: Input
}

export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' />


const Template = args => <Input {...args} />

export const LargeA = Template.bind({})
LargeA.args = {
    size: 'large',
    placeholder: 'Extra Large'
}