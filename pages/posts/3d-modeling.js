import { Container, Heading, Text, Box } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { useColorModeValue } from '@chakra-ui/react'

const ThreeDModeling = () => (
  <Layout title="3D Modeling & Design">
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg"
      p={6}
    >
      <Heading as="h3" mb={10} variant="section-title" textAlign="center">
        3D Modeling & Design
      </Heading>
      
      <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          From concept to completion, I provide top-tier 3D modeling services for games, simulations, and products. Using Blender and Maya, I design highly detailed characters, objects, and environments.
        </Text>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          My focus is on precision, efficiency, and creating 3D assets that are not only visually impressive but also optimized for performance.
        </Text>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          Let’s collaborate to bring your creative vision to life, transforming ideas into beautifully rendered 3D models for various platforms and industries.
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default ThreeDModeling
