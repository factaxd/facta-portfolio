import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    position="fixed" // Sabit pozisyon, tüm ekranı kapsar ve scroll'da hareket etmez
    top={0}
    left={0}
    w="100vw"
    h="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    overflow="hidden" // Gereksiz taşmaları engellemek için overflow'u gizliyoruz
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
