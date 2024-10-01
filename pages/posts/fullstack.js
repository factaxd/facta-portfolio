import { Container, Heading, Text, Box } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { useColorModeValue } from '@chakra-ui/react'

const Fullstack = () => (
  <Layout title="Fullstack Website Development">
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg"
      p={6}
    >
      <Heading as="h3" mb={10} variant="section-title" textAlign="center">
        Fullstack Website Development
      </Heading>
      
      <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          I specialize in delivering comprehensive website solutions, covering everything from beautiful, responsive front-end design to scalable and efficient back-end systems.
        </Text>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          Utilizing the latest technologies like React.js, Node.js, and MongoDB, I build dynamic, secure, and SEO-friendly web applications that meet modern standards.
        </Text>
        <Text fontSize="lg" mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
          Whether you're a startup, small business, or individual, I craft custom web experiences tailored to your needs, ensuring functionality and design work seamlessly together.
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Fullstack
