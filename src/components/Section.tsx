import React from 'react'
import type { BoxProps, ContainerProps } from '@chakra-ui/react'
import { Box, Container } from '@chakra-ui/react'

type Props = {
  containerProps?: ContainerProps
} & BoxProps

export const Section: React.FC<Props> = ({ containerProps, children, ...rest }) => (
  <Box position='relative' px={{ base: 1, sm: 2, md: 0 }} {...rest}>
    <Container py={{ base: 6, sm: 10, md: 24 }} alignItems='center' maxW={{ base: '100%', sm: 'container.sm', md: 'container.xl' }} {...containerProps}>
      {children}
    </Container>
  </Box>
)