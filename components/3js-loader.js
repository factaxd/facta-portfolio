import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const JSSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const JSContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="js-scene"
    position="fixed" 
    top={0}
    left={0}
    w="100vw"
    h="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    overflow="hidden" 
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <JSContainer>
      <JSSpinner />
    </JSContainer>
  )
}

export default Loader
