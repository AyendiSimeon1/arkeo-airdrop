import React from 'react'
import type { BoxProps, ContainerProps } from '@chakra-ui/react'
import { Box, Flex, Container, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

type Props = {
  back?: () => void
  header?: string
  desc?: string
  containerProps?: ContainerProps
} & BoxProps

export const Panel: React.FC<Props> = ({
  containerProps,
  children,
  header,
  desc,
  back,
  ...rest
}) => (
  <Flex
    flex="1"
    flexDir="column"
    justifyContent="center"
    width={{ base: '100%', sm: '95%', md: '650px' }}
    px={{ base: 1, sm: 2, md: 0 }}
    {...rest}
  >
    <Container
      borderRadius={{ base: '12px', md: '24px' }}
      color="white"
      border="1px solid"
      borderColor="grey.200"
      boxShadow="0px 0px 50px 0px rgba(0, 0, 0, 0.18)"
      backgroundColor="grey.300"
      backdropFilter="blur(30px)"
      maxW="auto"
      p={{ base: 2, md: 0 }}
      height="inherit"
      {...containerProps}
    >
      {header && (
        <Box pt="32px">
          <Text
            background="purple"
            backgroundClip="text"
            fontSize="36px"
            fontWeight="900"
            lineHeight="normal"
            letterSpacing="-1.08px"
            pb="12px"
          >
            {header}
          </Text>
          {desc && (
            <Text
              color="white"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="28px"
            >
              {desc}
            </Text>
          )}
        </Box>
      )}
      {children}
    </Container>
  </Flex>
)
