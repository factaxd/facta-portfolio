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
import Layout from '../components/layouts/article'
import Image from 'next/image'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Portfolio = () => (
  <Layout title="Portfolio">
    <Container
      mt={16}
      bg={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(0, 0, 0, 0.8)')} 
      borderRadius="lg"
      boxShadow="lg"
      p={6}
    >
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            İsmail Yarar
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/facta-image.jpeg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      {/* Divider for separating sections */}
      <Divider my={6} />

      {/* Experience Section Header */}
      <Heading as="h3" variant="section-title">
        Experience
      </Heading>

      {/* Freelance Developer Experience */}
      <Box p={4} borderRadius="lg" bg={useColorModeValue('orange.100', 'gray.900')} boxShadow="md" mb={6}>
        <Heading as="h4" fontSize={18} mb={2}>
          Freelance Developer
        </Heading>
        <Text fontSize={14} color={useColorModeValue('gray.600', 'gray.300')}>
          <Badge colorScheme="green">2023 - Present</Badge> at Facta
        </Text>
        <Text mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
          Developing custom solutions for various clients, focusing on modern web technologies, game prototypes, and application design.
        </Text>
        {/* List of Responsibilities */}
        <List mt={4} spacing={3}>
          <ListItem fontSize="sm"> {/* Adjusted font size for smaller text */}
            <ListIcon as={ChevronRightIcon} color="green.500" /> {/* Icon used for each list item */}
            Worked with clients from diverse industries to build tailored web and mobile applications  
            </ListItem>        
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Managed and delivered projects from conception to deployment
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Continuously learning and implementing the latest technologies to improve my offerings
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Designed responsive user interfaces that enhance user experience
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="green.500" />
            Delivered on-demand software commissions, including custom plugins, features, and integrations
          </ListItem>
        </List>
      </Box>

      {/* Mendix Developer Experience */}
      <Box p={4} borderRadius="lg" bg={useColorModeValue('orange.100', 'gray.900')} boxShadow="md" mb={6}>
        <Heading as="h4" fontSize={18} mb={2}>
          Mendix Developer
        </Heading>
        <Text fontSize={14} color={useColorModeValue('gray.600', 'gray.300')}>
          <Badge colorScheme="blue">2022 - 2023</Badge> at BAYPM
        </Text>
        <Text mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
          Worked as a Mendix Developer, collaborating with cross-functional teams to build and maintain low-code web applications that improved business processes.
        </Text>
        {/* List of Responsibilities */}
        <List mt={4} spacing={3}>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="blue.500" />
            Collaborated with cross-functional teams to ensure seamless integration of new features into existing systems
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="blue.500" />
            Designed and implemented user-friendly, intuitive interfaces using Mendix, resulting in increased customer satisfaction
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="blue.500" />
            Contributed to business process optimization by developing custom solutions that automated routine tasks and workflows
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="blue.500" />
            Participated in agile development processes, ensuring timely delivery of new features and updates
          </ListItem>
        </List>
      </Box>

      {/* Divider for separating sections */}
      <Divider my={6} />

      {/* Education Section Header */}
      <Heading as="h3" variant="section-title">
        Education
      </Heading>

      {/* Education Section */}
      <Box p={4} borderRadius="lg" bg={useColorModeValue('orange.100', 'gray.900')} boxShadow="md" mb={6}>
        <Heading as="h4" fontSize={18} mb={2}>
          B.Sc. in Software Engineering
        </Heading>
        <Text fontSize={14} color={useColorModeValue('gray.600', 'gray.300')}>
          <Badge colorScheme="orange">2021 - Present</Badge> at Karadeniz Technical University
        </Text>
        <Text mt={2} color={useColorModeValue('gray.600', 'gray.300')}>
          Focused on software engineering principles, systems design, and scalable architecture development. Key areas of study include:
        </Text>
        {/* List of Key Study Areas */}
        <List mt={4} spacing={3}>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="orange.500" />
            Object-Oriented Programming & Design Patterns
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="orange.500" />
            Database Management & SQL
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="orange.500" />
            Software Development Life Cycle (SDLC)
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="orange.500" />
            Cloud Computing & Distributed Systems
          </ListItem>
          <ListItem fontSize="sm">
            <ListIcon as={ChevronRightIcon} color="orange.500" />
            Scalable System Architecture Design
          </ListItem>
        </List>
      </Box>
    </Container>
  </Layout>
)

export default Portfolio
export { getServerSideProps } from '../components/chakra'
