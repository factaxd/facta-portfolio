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
    position="absolute" // Kutuyu mutlak konuma getirdik
    top={0} // Üstten 0 mesafe (tam ekran)
    left={0} // Soldan 0 mesafe (tam ekran)
    right={0} // Sağdan 0 mesafe (tam ekran)
    bottom={0} // Alttan 0 mesafe (tam ekran)
    w="100vw" // Genişlik: 100% (viewport genişliği)
    h="100vh" // Yükseklik: 100% (viewport yüksekliği)
    display="flex" // İçeriği ortalamak için flexbox kullanıyoruz
    justifyContent="center" // Yatayda ortalama
    alignItems="center" // Dikeyde ortalama
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
