import { Container, Heading, Text, Box } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { useColorModeValue } from '@chakra-ui/react'

const IndieGames = () => (
  <Layout title="Indie Game Development">
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg"
      p={6}
    >
      <Heading as="h3" mb={10} variant="section-title" textAlign="center">
        Indie Game Development
      </Heading>

      <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          I turn creative game ideas into reality, focusing on delivering unique gameplay mechanics and captivating experiences for players.
        </Text>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          Using engines like Unity and Unreal, I build everything from small 2D platformers to larger 3D worlds, ensuring quality, performance, and player engagement.
        </Text>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          Let’s create something unforgettable together, blending story, art, and mechanics to create an indie game that stands out in the industry.
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default IndieGames
