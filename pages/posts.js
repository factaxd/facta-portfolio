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

      

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
