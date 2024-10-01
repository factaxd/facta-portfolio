import { 
  Container, 
  Heading, 
  Divider, 
  useColorModeValue, 
  Box, 
  Text, 
  Button,
  Link as ChakraLink
} from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import NextLink from 'next/link'

const Posts = () => (
  <Layout title="Posts">
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg" 
      p={6} 
    >
      {/* Services Section Header */}
      <Heading as="h3" mb={10} variant="section-title" textAlign="center">
        My Services
      </Heading>

      {/* Fullstack Website Development Service */}
      <Section delay={0.1}>
        <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
          <Heading as="h4" fontSize="xl" color="orange.400" mb={4}>
            Fullstack Website Development
          </Heading>
          <Text mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
            I offer complete website development services, from front-end to back-end. 
            Whether you're looking for a simple website or a robust platform, I create responsive, high-performance, and scalable web applications using technologies like React and Node.js.
          </Text>
          <NextLink href="/posts/fullstack" passHref>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              variant="solid"
            >
              Learn More
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Divider my={8} />

      {/* Indie Game Development Service */}
      <Section delay={0.2}>
        <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
          <Heading as="h4" fontSize="xl" color="orange.400" mb={4}>
            Indie Game Development
          </Heading>
          <Text mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
            I specialize in developing indie games from concept to launch. Whether you're looking to create a unique game mechanic or bring a fully realized world to life, I use industry-leading tools like Unity and Unreal Engine to craft games that captivate players.
          </Text>
          <NextLink href="/posts/indie-games" passHref>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              variant="solid"
            >
              Learn More
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Divider my={8} />

      {/* 3D Modeling and Design Service */}
      <Section delay={0.3}>
        <Box p={6} borderRadius="lg" bg={useColorModeValue('gray.100', 'gray.900')} boxShadow="md" mb={6}>
          <Heading as="h4" fontSize="xl" color="orange.400" mb={4}>
            3D Modeling & Design
          </Heading>
          <Text mb={4} color={useColorModeValue('gray.600', 'gray.300')}>
            My 3D modeling and design services cater to various needs such as game assets, simulations, and product designs. I work with the latest tools like Blender and Maya to bring your vision to life with precision and detail.
          </Text>
          <NextLink href="/posts/3d-modeling" passHref>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme="orange"
              variant="solid"
            >
              Learn More
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
