import React from 'react'
import { Button } from '@chakra-ui/react'


export default {
    title: 'Chakra/Button',
    component: Button
}

// const Template = args => <Button {...args}>Button</Button>

// export const Success = Template.bind({})

// Success.args = {
//     children: 'Button',
//     colorScheme: 'green',
//     size: 'md',
//     variant: 'outline'
// }
export const Success = () => <Button colorScheme="blue">Button</Button>