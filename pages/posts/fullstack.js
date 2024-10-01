import { Container, Heading, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

const Fullstack = () => (
  <Layout title="Fullstack Website Development">
    <Container>
      <Heading as="h1" mb={6}>
        Fullstack Website Development
      </Heading>
      <Text mb={4}>
        I offer complete fullstack website development, focusing on building fast, secure, and scalable applications. My expertise includes both front-end and back-end technologies like React, Node.js, Express, and MongoDB.
      </Text>
      <Text mb={4}>
        Whether you're looking to develop a small business website, a robust web platform, or a personal portfolio, I can create custom solutions tailored to your needs. With an emphasis on responsive design and user experience, I ensure your site looks great on all devices.
      </Text>
    </Container>
  </Layout>
)

export default Fullstack
