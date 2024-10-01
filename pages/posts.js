import { 
  Container, 
  Heading, 
  Divider, 
  useColorModeValue, 
  Box, 
  Text, 
  Badge, 
  List, 
  ListItem, 
  ListIcon,
  Button,
  NextLink
} from '@chakra-ui/react'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Posts = () => (
  <Layout title="Posts">
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg"
      p={6}
    >
      {/* Projects Section Header */}
      <Heading as="h3" mb={10} variant="section-title">
        Services
      </Heading>

      {/* Fullstack Website Development Service */}
      <Section delay={0.1}>
        <Heading as="h4" fontSize="xl" mb={4}>
          Fullstack Website Development
        </Heading>
        <Text mb={4}>
          Comprehensive website development services from front-end to back-end. Expertise in various technologies including React, Node.js, and more to create responsive, performant, and scalable websites.
        </Text>
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          as={NextLink}
          href="/services/fullstack"
        >
          Learn More
        </Button>
      </Section>

      <Divider my={8} />

      {/* Indie Game Development Service */}
      <Section delay={0.2}>
        <Heading as="h4" fontSize="xl" mb={4}>
          Indie Game Development
        </Heading>
        <Text mb={4}>
          Development of indie games from concept to release. Specializing in game design, mechanics, and development with engines like Unity and Unreal Engine.
        </Text>
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          as={NextLink}
          href="/services/indie-games"
        >
          Learn More
        </Button>
      </Section>

      <Divider my={8} />

      {/* 3D Modeling and Design Service */}
      <Section delay={0.3}>
        <Heading as="h4" fontSize="xl" mb={4}>
          3D Modeling & Design
        </Heading>
        <Text mb={4}>
          Professional 3D modeling and design services for various applications such as games, simulations, and product design. Expertise in Blender, Maya, and other leading design tools.
        </Text>
        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          as={NextLink}
          href="/services/3d-modeling"
        >
          Learn More
        </Button>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
